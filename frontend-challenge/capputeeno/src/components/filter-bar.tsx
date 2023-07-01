"use client"
import { styled } from "styled-components"
import { FilterByType } from "./filter-by-type"
import { FilterByPriority } from "./filter-by-priority"

interface FilterVarProps {

}

const FilterContainer = styled.div `
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar(props: FilterVarProps) {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}