import { FC } from "react";

const SidebarHeader: FC = () => {
    return (
        <div className="mb-8 flex w-full justify-center bg-slate-500">
            <div className="flex flex-col">
                <h1 className="mt-6 inline-block text-xl">
                    Yangon Animal Shelter
                </h1>
                <h2 className="-mt-1 mb-6 inline-block text-sm">
                    Admin Console
                </h2>
            </div>
        </div>
    );
};

export default SidebarHeader;
