"use client";
import {Checkbox} from "@nextui-org/react";
import React from "react";

interface CheckProps {
    name: string;
    foolish: boolean;
}

interface CheckState {
    checked: boolean;
    foolish: boolean;
}

export class CheckView extends React.Component<CheckProps, CheckState> {
    constructor(props: CheckProps) {
        super(props);
        this.state = {checked: false, foolish: false};
    }

    private readonly onCheckboxValueChange = (value: boolean) => this.setState({checked: value});

    public render(): React.ReactNode {
        return (
            <label>
                <Checkbox
                    color="default"
                    isSelected={this.state.checked}
                    onValueChange={this.onCheckboxValueChange}
                    lineThrough={this.props.foolish || this.state.checked}
                    isDisabled={this.props.foolish}
                >
                    {this.props.name}
                </Checkbox>
            </label>
        );
    }
}
