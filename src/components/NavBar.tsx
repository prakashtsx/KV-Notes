import { Badge } from "@/components/ui/8bit/badge"

function NavBar() {
    return (
        <div className="flex retro justify-between bg-black text-white px-10 py-5">
            <h1 className="text-2xl">KV-Notes</h1>
            <Badge variant="secondary" className="hidden md:block">For B-Section</Badge>
        </div>
    )
}

export default NavBar