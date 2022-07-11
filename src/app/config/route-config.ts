
// Define all the route urls for the whole app
export const RouteConfig = {
  signin: { path: 'signin', url: '/signin' },
  forget: { path: 'forget', url: '/forget' },
  resetPassword: { path: 'reset-password', url: '/reset-password' },

  main: { path: 'main', url: '/main' },

  profile: { path: 'profile', url: '/main/profile' },

 // dashboard
  dashboard: { path: 'dashboard', url: '/main/dashboard' },

 // dashboard v2
  dashboardv2: { path: 'dashboardv2', url: '/main/dashboardv2' },

  // Vehicle Route
  vehicle: { path: 'vehicle', url: '/main/vehicle' },
  vehicleDetail: { path: 'vehicleDetail', url: '/main/vehicle/vehicleDetail' },

  //Trip Route
  trip: { path: 'trip', url: '/main/trip' },
  tripDetail: { path: 'tripDetail', url: '/main/trip/tripDetail' },

  //Driver Route
  driver: { path: 'driver', url: '/main/driver' },
  driverDetail: { path: 'driverDetail', url: '/main/driver/driverDetail' },

  //exceptions Route
  exceptions: { path: 'exceptions', url: '/main/exceptions' },

  //exceptions Route
  mapview: { path: 'mapview', url: '/main/mapview' },


  //exceptions Route
  exception: { path: 'exception-setting', url: '/main/exception-setting' },

  //vehicle Route
  vehiclesetting: { path: 'vehiclesetting', url: '/main/vehiclesetting' },

  //weightage Route
  weightage: { path: 'weightage', url: '/main/weightage' },
  editweightage: { path: 'editweightage', url: '/main/weightage/editweightage' },

  //driving Score Comparison
  drivingBehaviour: { path: 'drivingbehaviour', url: '/main/drivingbehaviour' },

    //Rule engine settings
    ruleengine: { path: 'ruleengine', url: '/main/ruleengine' },
    editruleengine: { path: 'editruleengine', url: '/main/ruleengine/editruleengine' },
    addruleengine: { path: 'addruleengine', url: '/main/ruleengine/addruleengine' },

  //vechile driving score Comparison
  vechiledrivingBehaviour: { path: 'vechiledrivingbehaviour', url: '/main/vechiledrivingbehaviour' },


  //Scrore Comparison
  scrorecomparision: { path: 'scrorecomparision', url: '/main/scrorecomparision' },

  //group
  groups: { path: 'groups', url: '/main/groups' },
  editgroups: { path: 'group-edit', url: '/main/groups/group-edit' },
  addgroups: { path: 'group-add', url: '/main/groups/group-add' },

  //Scrore Comparison
  fuelmilage: { path: 'fuelmilage', url: '/main/fuelmilage' },

  support: { path: 'support', url: '/main/support' },

  // change password
  changepassword:{path:'changepassword', url:'/main/profile/changepassword'},

  //colorPicker
  colorpicker:{path: 'colorpicker', url:'main/profile/colorpicker'}
}
