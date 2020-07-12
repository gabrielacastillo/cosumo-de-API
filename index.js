new Vue({
    el:"#app",
    data: {
      a: 1
    },
    beforeCreate: function(){
      console.log("beforeCreate");
    },
    created: function () {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("created");
        console.log(data);
      });
    },
    beforeMount: function(){
      console.log("beforeMount")
    },
    mounted: function(){
      console.log("mounted")
    },
    beforeUpdate: function(){
      console.log("beforeUpdate")
    },
    updated: function(){
      console.log("updated")
    },
    beforeDestroy: function(){
      console.log("beforeDestroy")
    },
    destroyed: function(){
      console.log("destroyed")
    }
})