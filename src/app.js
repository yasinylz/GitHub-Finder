 //selected elements
 const githunForm=document.getElementById('github-form');
 const nameInput=document.getElementById('githubname');
 const clearLastUsers=document.getElementById('clear-last-users');
 const lastUsers=document.getElementById('last-users');
 const github=new Github();
 const ui=new UI();
 eventListener();
 function eventListener(){
    githunForm.addEventListener('submit',getData);
    clearLastUsers.addEventListener('click',clearAllSearched);
    document.addEventListener('DOMContentLoaded',getAllSearched)
 }
 function getData(e){
 const username=nameInput.value.trim();
if(username===''){
    alert('Lütfen bir  kullanıcı adı girin!!')
}else{
    github.getGithubData(username).then(response=>{
        if(response.user.message==='Not Found'){
            ui.showError('Kullanıcı bulunamadı!!');
        }else{
            ui.addSearchedUserToUI(username);
            Storage.addSearchedUserToStorage(username);
           ui.showUserProfile(response.user);
           ui.showUserRepo(response.repo);

        }
    }).catch(err=>ui.showError(err))
}
    ui.clearInput();//clear input
    e.preventDefault();
 }
 function clearAllSearched(){//all clear palace
    if(confirm('Emin misiniz ?')){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFrom();
    }

 }
 function getAllSearched(){//get all storgae  search and  add to  ui

let users=Storage.getSearchedUsersFromStorage();
let result='';
users.forEach(user=>{
    result+=`<li class="list-group-item">${user}</li>`;
});
lastUsers.innerHTML=result;

 }