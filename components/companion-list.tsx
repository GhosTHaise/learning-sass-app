import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface CompanionListProps {
  title: string
  companions?: Companion[]
  classNames?: string
}

const CompanionList = ({
  title,
  companions,
  classNames,
} : CompanionListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            companions?.map(({id , subject, name , topic , duration}) => (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className="flex items-center gap-2">
                      <div>
                        <Image 
                          src={`/icons/${subject}.svg`}
                          alt={`${subject} lesson`}
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>{subject}</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionList