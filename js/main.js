'use strict';
{
  //プロフィールバー出現
  const profileOpen = document.getElementById('profileOpen');
  const profile = document.getElementById('profile');
  const open = document.getElementById('open');
  

  profileOpen.addEventListener('click',() => {
    profile.classList.add('show');
  });
  open.addEventListener('click', () => {
    profile.classList.add('show');
  });
  profile.addEventListener('click', () => {
    profile.classList.remove('show');
  });

  //ハンバーガー出現
  const ham = document.getElementById('hamburger');
  const menuOpen = document.getElementById('menuOpen');
  const close = document.getElementById('close');

  menuOpen.addEventListener('click', () => {
    ham.classList.add('show');
  });
  close.addEventListener('click', () => {
    ham.classList.remove('show');
  });


}