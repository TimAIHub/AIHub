"use client"

import { useGlobalContext, useGlobalContextUpdate } from "@/app/context/globalContext"
import { Button } from "@/components/ui/button"
import { Command, CommandInput, CommandList } from "@/components/ui/command"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { CommandIcon } from "lucide-react"
import React from "react"

function SearchDialog() {

    const { geoCodedList, inputValue, handleInput } = useGlobalContext();
    const { setActiveCityCoords } = useGlobalContextUpdate();
    
    const [hoverIndex, setHoverIndex] = React.useState<number>(0);

    const getClickedCoords = (lat: number, lng: number) => {
        setActiveCityCoords([lat, lng]);
        console.log("lat, lng liumiao", lat, lng);
    };

    return (
        <div className="search-btn">
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                    variant="outline" 
                    className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100 ease-in-out duration-200">
                        <p className="text-sm text-muted-foreground">Search Here...</p>
                        <div className="command dark:bg-[#262626] bg-slate-200 py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center gap-2">
                            {<CommandIcon name="search" size={18}/>}
                            <span className="text-[9px]">F</span>
                        </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="p-1">
                    {/* <VisuallyHidden>
                        <DialogTitle className="text">Search</DialogTitle>
                    </VisuallyHidden> */}
                    <Command className="rounded-lg border shadow-md">
                        <CommandInput
                            value={inputValue}
                            placeholder="Type a command or search ..."
                            onChangeCapture={handleInput}
                        />
                        <ul className="px-3 pb-2">
                            <p className="p-2 text-sm text-muted-foreground">Suggestion</p>
                            {geoCodedList?.length === 0 || (!geoCodedList && <p>No Result</p>)}

                            {geoCodedList && geoCodedList.map(
                                ( 
                                    item: {
                                        name: string;
                                        country: string,
                                        state: string,
                                        lat: number,
                                        lon: number,
                                    },
                                    index: number
                                ) => {
                                    const { name, country, state } = item;
                                    return (
                                        <li
                                        key={index}
                                        onMouseEnter={() => setHoverIndex(index)}
                                        className={`py-3 px-2 text-sm rounded-sm cursor-default ${hoverIndex === index ? "bg-accent" : ""}`}
                                        onClick={() => {
                                            getClickedCoords(item.lat, item.lon);
                                        }}
                                        >
                                            <p className=" text">{name}, {state && state + ","} {country}</p>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                        <CommandList></CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SearchDialog