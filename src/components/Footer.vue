<template>
    <footer class="footer">
      <div class="footer-content">
        <p>Team AQ &copy; 2023</p>
        <span class="separator">|</span>
        <p> Privacy</p>
        <span class="separator">|</span>
        <p> Terms</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
  display: flex;
  background-color: #7597ad;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  border-radius: 10px;
  width: 99.5%;
  height: 3.5em;
}

.footer-content {
  display: flex;
  align-items: center;
}

footer p {
  font-size: 1em;
  color: #ECECEA;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
}

.separator{
  color: #ECECEA;
}
  </style>