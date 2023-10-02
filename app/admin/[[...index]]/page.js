"use client";
import config from "../../../sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage () {
    return (
        <div className="pl-8 pr-8 pt-36 ">
            <div className="border border-gray-600 ">
    <NextStudio config={config}  />;
    </div>
    </div>
    )
}
