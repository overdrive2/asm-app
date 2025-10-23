// resources/js/Columns/assetCategoryColumns.tsx

import { ColumnDef } from "@tanstack/react-table"
import { AssetKind } from "@/types"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"
import { Edit, List, NotebookText, Trash } from "lucide-react"
import assets from "@/routes/assets"
import { router } from "@inertiajs/react"

interface AssetKindColumnsProps {
  openEdit: (assetkind: AssetKind) => void
  deleteAssetKind: (id: string | number) => void
}

export function assetKindColumns({
  openEdit,
  deleteAssetKind,
}: AssetKindColumnsProps): ColumnDef<AssetKind>[] {
  return [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "asset_code", header: "Code" },
    { accessorKey: "type_name", header: "Name (TH)" },
    { accessorKey: "useful_life", header: "Useful Life" },
    { accessorKey: "depreciation_rate", header: "Depreciation Rate" },

    /* ------- Action column ------- */
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="ghost">
              <span aria-label="More actions">⋯</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="p-0 w-auto">
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 hover:bg-muted"
              onClick={() => router.get(assets.index(row.original.id).url)}
            >
              <NotebookText className="mr-2 h-4 w-4" />
              Assets
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 hover:bg-muted"
              onClick={() => openEdit(row.original)}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>

            <PopoverClose asChild>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-destructive hover:bg-muted"
                onClick={() => deleteAssetKind(row.original.id)}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      ),
    },
  ]
}
