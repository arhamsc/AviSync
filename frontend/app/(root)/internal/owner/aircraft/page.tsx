import { CButton } from "@/components/custom";
import CCard from "@/components/custom/CCard";
import { FilterListIcon } from "@/components/icons";
import { airplaneName } from "@/constants";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="mb-12 flex flex-row justify-between">
                <p className="heading-1">Fancy something New?</p>
                <CButton halfWidth icon={<FilterListIcon />}>
                    Filter
                </CButton>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {airplaneName.map((name) => (
                    <CCard key={name} label={name} owner />
                ))}
            </div>
        </div>
    );
};

export default page;
