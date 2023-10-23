import React from "react";
import type { Story } from "@ladle/react";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
} from '~/components/ui/pagination'

export const pagination: Story = () => {
  return (
    <Pagination count={90} pageSize={10} siblingCount={1} defaultPage={2}>
      {({ pages }) => (
        <>
          <PaginationList>
            <PaginationPrevPageTrigger asChild>
              <IconButton variant="ghost" aria-label="Next Page">
                <ChevronLeftIcon />
              </IconButton>
            </PaginationPrevPageTrigger>

            {pages.map((page, index) =>
              page.type === 'page' ? (
                <PaginationPageTrigger key={index} {...page} asChild>
                  <Button variant="outline">{page.value}</Button>
                </PaginationPageTrigger>
              ) : (
                <PaginationEllipsis key={index} index={index}>
                  &#8230;
                </PaginationEllipsis>
              ),
            )}

            <PaginationNextPageTrigger asChild>
              <IconButton variant="ghost" aria-label="Next Page">
                <ChevronRightIcon />
              </IconButton>
            </PaginationNextPageTrigger>
          </PaginationList>
        </>
      )}
    </Pagination>
  )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Pagination"
};