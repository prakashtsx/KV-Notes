import { Badge } from "@/components/ui/8bit/badge"

function NavBar() {
    return (
        <div className="flex retro justify-between border-b border-dashed border-neutral-500  bg-neutral-900 px-10 py-5 text-neutral-100">
            <h1 className="text-2xl">KV-Notes</h1>
            <div className="flex items-center gap-4">
                <Badge className="hidden md:block">B-Section Only</Badge>
            </div>
        </div>
    )
}

export default NavBar