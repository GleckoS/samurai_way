
export const UserAPI = {
    getUsersUp(currentPage, pageSize) {
        let localCurrentPageUP = currentPage.currentPage + 1
        return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${localCurrentPageUP}&count=${pageSize}`,
            {credentials: 'include'})
            .then(res => res.json())
    },
    getUsersDown (currentPage, pageSize){
        let localCurrentPageDOWN = currentPage.currentPage - 1
        return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${localCurrentPageDOWN}&count=${pageSize}`,
            {credentials: 'include'})
            .then(res => res.json())
    },
    getUsers({currentPage, pageSize}){
        return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {credentials: 'include'})
            .then(res => res.json())
    }

}