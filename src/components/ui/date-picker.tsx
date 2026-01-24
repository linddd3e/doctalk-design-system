"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export interface DatePickerProps {
    date?: Date
    onDateChange?: (date: Date | undefined) => void
    placeholder?: string
    className?: string
    disabled?: boolean
}

export function DatePicker({
    date,
    onDateChange,
    placeholder = "Pick a date",
    className,
    disabled,
}: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export interface DateRangePickerProps {
    from?: Date
    to?: Date
    onDateRangeChange?: (range: { from?: Date; to?: Date }) => void
    placeholder?: string
    className?: string
}

export function DateRangePicker({
    from,
    to,
    onDateRangeChange,
    placeholder = "Pick a date range",
    className,
}: DateRangePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !from && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {from ? (
                        to ? (
                            <>
                                {format(from, "LLL dd, y")} - {format(to, "LLL dd, y")}
                            </>
                        ) : (
                            format(from, "LLL dd, y")
                        )
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={from}
                    selected={{ from, to }}
                    onSelect={(range) => {
                        onDateRangeChange?.({
                            from: range?.from,
                            to: range?.to,
                        })
                    }}
                    numberOfMonths={2}
                />
            </PopoverContent>
        </Popover>
    )
}
