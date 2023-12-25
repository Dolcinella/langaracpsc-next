"use client";

import React, { Component, useContext } from "react";
import NavButton from "./NavButton";
import {Global, Vector2D} from "@/app/Global";
import { useRouter } from "next/navigation";

interface NavBarProps
{}

interface NavBarState
{
    ButtonGap?: number;
    TopMargin?: number;
}

export default function NavBar({} : NavBarProps) 
{
    <div className={"gap-x-2"}></div>;
    <div className={"gap-x-3"}></div>;
    <div className={"gap-x-5"}></div>;
    <div className={"gap-x-7"}></div>;
    <div className={"mt-5"}></div>;
    <div className={"mt-4"}></div>;
    <div className={"mt-3"}></div>;

    const router = useRouter();

    const onClickHandler  = (url: string) => {
        router.push(url);
    };

    return (
        <div className="flex flex-row max-[600px]:grid max-[600px]:grid-rows-2  row-start-1 row-span-1 max-[600px]:justify-center">
            <div className="min-[600px]:basis-1/4 max-[600px]:row-start-1 flex flex-row shrink-0 grow-0 max-[600px]:justify-center ">
                <div></div>
                <img src="LCS.png" alt="club-logo" className="ml-5 flex-start-2 max-[600px]:ml-8 shrink-0 grow-0 h-full select-none"/>
                <div></div>
            </div>
            <div className="min-[600px]:basis-3/4 max-[600px]:grid max-[600px]:grid-template-cols[5%_90%_5%] min-[600px]:flex min-[600px]:justify-end min-[600px]:mr-8 h-full">
                <div></div>
                <div className={"col-start-2"}>
                    <div className={"nav_button_container flex max-[500px]:gap-x-3 gap-x-7 mt-5 max-[500px]:mt-6"}>
                        <NavButton Label={"Home"} Activated={false} EndPoint={"/"} OnClick={onClickHandler}/>
                        <NavButton Label={"About"} Activated={false} EndPoint={"/about"}  OnClick={onClickHandler}/>
                        <NavButton Label={"Events"} Activated={false} EndPoint={"/events"}  OnClick={onClickHandler}/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

