'use client'

import styles from "@/components/Search.module.css";

export default function Search(){
    return(
        <div className="w-full rounded-lg border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 p-4">
            <div className="flex items-center gap-3">
                <input type="text" placeholder="Search products..." className="h-8 flex-1 rounded border border-slate-300 dark:border-slate-700 dark:bg-slate-950 px-3 text-xs text-slate-900 dark:text-slate-100 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200"/>
               
                <select className="h-8 w-32 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 px-2 text-xs text-gray-900 dark:text-slate-100 outline-none">
                    <option>Placeholder</option>
                    {/* get options from backend */}
                </select>
               
                <select className="h-8 w-32 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 px-2 text-xs text-gray-900 dark:text-slate-100 outline-none">
                    <option>All Stock</option>
                    {/* can prolly hardcode these */}
                </select>
                {/* <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z" fill="currentColor"/>
                </svg> */}
                <button className="flex h-8 items-center gap-1.5 rounded border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 px-3 text-xs font-medium text-slate-900 dark:text-slate-100 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
                    </svg>
                    Filter
                </button>
            </div>
        </div>
    )
}