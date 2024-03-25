"use client";
import React from "react";
import {Switch} from "@nextui-org/react";
import RegionView from "./region/region.view";
import {classNames} from "./classnames";

export default function Home() {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <React.StrictMode>
            <div
                className={classNames("flex", "flex-col", "min-h-screen", "text-foreground", "bg-background", {
                    dark: darkMode,
                })}
            >
                <header className="flex justify-between p-4 border-b border-divider">
                    <h1>Rainbow Bridge Tracker</h1>
                    <Switch
                        isSelected={darkMode}
                        onValueChange={setDarkMode}
                    >
                        Dark mode
                    </Switch>
                </header>
                <main className="flex p-4">
                    <RegionView
                        name="Kokiri Forest"
                        checks={[
                            {name: "Mido's top left chest"},
                            {name: "Mido's top right chest"},
                            {name: "Mido's bottom left chest"},
                            {name: "Mido's bottom right chest"},
                            {name: "Kokiri Sword Chest"},
                            {name: "Storms Grotto Chest"},
                        ]}
                    ></RegionView>
                </main>
            </div>
        </React.StrictMode>
    );
}
