
import Link from "next/link";
export default function  NavBar(){
    return(
                
            <nav className="flex flex-wrap gap-4">
                <link className="text-gray-500 font-bold" href="/dashboard">Go  to dashboard</link>
                <link className="text-gray-500 font-bold" href="/professors">Go to professors</link>
                <link className="text-gray  -500 font-blod" href="/donors">Go to donors</link>
                </nav>





    );
}
