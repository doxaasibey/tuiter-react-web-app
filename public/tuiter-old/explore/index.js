import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";

//import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem";
//import who from "./who.js"

function exploreScreen() {
    $('#wd-explore').append(`
       <!--<h2>Explore</h2>-->
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        
       
        <div class="col-6 col-lg-7 col-xl-6">   
            ${ExploreComponent()}
        </div>
       
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
         </div>
     </div>
   `);
}
$(exploreScreen());



