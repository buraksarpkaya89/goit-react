import { createSelector } from "@reduxjs/toolkit"

export const selectCounter = state => state.selector.value
export const selectIsActive = state => state.selector.isActive

// export const selectCounterStatus = state => {
//     const value = state.selector.value
//     const isActive = state.selector.isActive

//     return {
//         value,
//         isActive,
//         status : isActive ? "Aktif" : "Pasif",
//         isPositive : value > 0
//     }
// }

export const selectCounterStatus = createSelector(
    [selectCounter, selectIsActive],
    (value, isActive) => ({
        value,
        isActive,
        status: isActive ? "Aktif" : "Pasif",
        isPositive: value > 0
    })
)


export const selectIsLoggedIn = state =>  state?.auth?.isLoggedIn ?? false
export const selectUser = state => state?.auth?.user ?? null
export const selectIsRefreshing = state => state?.auth?.isRefreshing ?? false