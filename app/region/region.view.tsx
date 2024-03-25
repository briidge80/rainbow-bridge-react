"use client";
import {Switch, Tooltip} from "@nextui-org/react";
import React from "react";
import {classNames} from "../classnames";
import {SkullIcon} from "../icon/skull.icon";
import {CheckView} from "../check/check.view";

interface CheckData {
    readonly name: string;
}

interface RegionProps {
    readonly name: string;
    readonly checks: readonly CheckData[];
}

interface RegionState {
    foolish: boolean;
}

class RegionView extends React.Component<React.PropsWithChildren<RegionProps>, RegionState> {
    constructor(props: RegionProps) {
        super(props);
        this.state = {foolish: false};
    }

    private readonly onFoolishValueChange = (value: boolean) => this.setState({foolish: value});

    public render(): React.ReactNode {
        return (
            <div className="flex flex-col border border-foreground rounded">
                <div className="flex items-center p-4 pr-2 justify-between">
                    <h2 className={classNames("flex font-bold", {"line-through opacity-60": this.state.foolish})}>
                        {this.props.name}
                    </h2>
                    <Tooltip
                        showArrow={true}
                        delay={250}
                        content="Foolish"
                    >
                        <div>
                            <Switch
                                color="default"
                                aria-label="Foolish"
                                thumbIcon={this.state.foolish ? <SkullIcon /> : undefined}
                                endContent={this.state.foolish ? undefined : <SkullIcon />}
                                isSelected={this.state.foolish}
                                onValueChange={this.onFoolishValueChange}
                            ></Switch>
                        </div>
                    </Tooltip>
                </div>
                <hr />
                <div className="flex flex-col p-4 gap-2">
                    {this.props.checks.map((check) => (
                        <CheckView
                            name={check.name}
                            foolish={this.state.foolish}
                        ></CheckView>
                    ))}
                </div>
            </div>
        );
    }
}

export default RegionView;
