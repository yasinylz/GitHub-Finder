class Storage{

    static getSearchedUsersFromStorage(){//get all users
        let users;
        if(localStorage.getItem('searched')===null){
            users=[];
        }else{
            users=JSON.parse(localStorage.getItem('searched'));
        }
        return users;

    }
    static addSearchedUserToStorage(username){//added users
        let  users=this.getSearchedUsersFromStorage();
        //IndexOf
        if(users.indexOf(username)===-1){
            users.push(username)
        }
        localStorage.setItem('searched',JSON.stringify(users))

    }
    static clearAllSearchedUsersFromStorage(){//all remove users
        localStorage.removeItem('searched');
    }
}