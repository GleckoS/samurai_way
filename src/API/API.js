
export const UserAPI = {
    getUsersUp(currentPage, pageSize) {
        let localCurrentPageUP = currentPage.currentPage + 1
        return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${localCurrentPageUP}&count=${pageSize}`,
            {credentials: 'include'})
            .then(res => res.json())
    },
    getUsersDown(currentPage, pageSize) {
        let localCurrentPageDOWN = currentPage.currentPage - 1
        return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${localCurrentPageDOWN}&count=${pageSize}`,
            {credentials: 'include'})
            .then(res => res.json())
    },
    getUsers({currentPage, pageSize}) {
        return fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {credentials: 'include'})
            .then(res => res.json())
    },
    FollowUnFollow({followed, id}) {
        return fetch(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                method: `${followed ? "DELETE" : "POST"}`,
                credentials: 'include',
                headers: {
                    'API-KEY': "fd396d83-5a31-4c7e-8a35-0246e4cf2a0a"
                }
            })
            .then(res => res.json())
    }

}



