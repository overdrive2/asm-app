// resources/js/columns/assetColumns.tsx

import { ColumnDef } from "@tanstack/react-table"
import { Asset } from "@/types"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"
import { Edit, List, Trash } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Link, router } from "@inertiajs/react"
import assets from "@/routes/assets"

interface AssetColumnsProps {
  openEdit: (asset: Asset) => void
  deleteAsset: (id: string | number) => void
  toggleSelect?: (id: number, selected: boolean) => void
  toggleSelectAll?: (selected: boolean) => void
  selectedIds?: number[]
}

export function assetColumns({
  openEdit,
  deleteAsset,
  toggleSelect,
  toggleSelectAll,
  selectedIds = [],
}: AssetColumnsProps): ColumnDef<Asset>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() && table.getPageCount() > 0
            }
            onCheckedChange={(checked: boolean) => toggleSelectAll?.(checked)}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Checkbox
            checked={selectedIds.includes(row.original.id)}
            onCheckedChange={(checked: boolean) =>
              toggleSelect?.(row.original.id, checked)
            }
          />
        </div>
      ),
      size: 48,
      enableSorting: false,
    },
    { accessorKey: "id", header: "ID" },
    { accessorKey: "asset_code", header: "Code" },
    { accessorKey: "asset_name", header: "Name" },
    { accessorKey: "kind.type_name", header: "Type" },
    { accessorKey: "kind.category.name", header: "Category" },
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

          <PopoverContent className="p-0 w-auto" forceMount>
            {/* List */}
            <PopoverClose asChild>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 hover:bg-muted"
                onClick={() => window.open(assets.detail(row.original.id).url, '_blank')}
              >
                <List className="mr-2 h-4 w-4" />
                Details
              </Button>
            </PopoverClose>
            {/* Edit */}
            <PopoverClose asChild>
              <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 hover:bg-muted"
              onClick={() => openEdit(row.original)}
              >
              <Edit className="mr-2 h-4 w-4" />
              Edit
              </Button>
            </PopoverClose>

            {/* Delete */}
            <PopoverClose asChild>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-destructive hover:bg-muted"
                onClick={() => deleteAsset(row.original.id)}
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
