import React from "react";
import { Link } from "react-router-dom";

import {
  Captions,
  CalendarDays,
  Presentation,
  ExternalLink,
} from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";

import { PopoverProps } from "@radix-ui/react-popover";
import { GetEventType } from "@/types";

type EventPopoverProps = {
  children: React.ReactNode;
  events: GetEventType[];
};

const EventPopover: React.FC<EventPopoverProps & PopoverProps> = ({
  children,
  events,
  ...props
}) => {
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-60 ">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              Events - {events.length}
            </h4>
            <p className="text-sm text-muted-foreground">
              All events in this date.
            </p>
          </div>
          <div className="grid gap-2">
            {events.length === 0 && (
              <div className="text-center text-muted-foreground">
                No events found.
              </div>
            )}
            {events.map((event, index) => {
              return (
                <>
                  <div
                    key={event.id}
                    className="flex flex-col gap-2 font-light"
                  >
                    <p className="flex items-center gap-2 font-normal">
                      <Presentation className="h-5" />
                      {event.title.length > 20
                        ? event.title.slice(0, 20).concat("...")
                        : event.title}
                    </p>
                    <p className="flex items-center  gap-2">
                      <Captions className="h-5" />
                      {event.description.length > 20
                        ? event.description.slice(0, 20).concat("...")
                        : event.description}
                    </p>
                    <p className="flex items-center  gap-2 ">
                      <CalendarDays className="h-5" />
                      <span className="  text-muted-foreground text-sm font-normal">
                        {event.date}
                      </span>
                      <Link
                        to={`/events/${event.id}`}
                        className="h-4 text-blue-500"
                        target="_blank"
                      >
                        <ExternalLink className="h-4 text-blue-500" />
                      </Link>
                    </p>
                  </div>
                  {index !== events.length - 1 && (
                    <Separator className="h-1 my-4 bg-black" />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventPopover;
