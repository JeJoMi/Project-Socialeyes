app.component('navbar', {
  templateUrl: 'components/nav/nav.html',
  bindings:{
    user: '=',
    logout:'&'
  }
})
