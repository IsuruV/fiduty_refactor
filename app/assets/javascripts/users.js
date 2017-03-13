
const socialContent = (users)=>{ 

let socialFeed = `  <div class="main-dashboard">
		  <div class="social-content">
		<div class="content-mid">
				<div class="middle-content" style="margin-top:5px; margin-bottom:15px; margin-left:20px; margin-right:20px;border-style:none; box-shadow:none " >
                <div class="col-md-12">
        <div class="row-fluid">
             <div class="btn-group btn-group-justified">
  <a id="everyonebtn" href="#" class="btn btn-primary btn-lg">Everyone</a>
  <a id="friendsbtn" href="#" class="btn btn-primary btn-lg">Friends</a>
  <a id="scoreboardbtn" href="#" class="btn btn-primary btn-lg">Scoreboard</a>
                </div>
        </div>
        <br>
        
 <!----------------Social Feed
					---------------------->
       
<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
     `
     
     if (users.length >0){
      
       for(let i=0; i<users.length; i++){
          socialFeed +=  `<a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
            <div class="row">
             <div class="col-sm-3"><div style="height:140;border:0px solid #000">
              <img src="${users[i].image}?type=large" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
             </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${users[i].name} chipped in ${users[i].last_portfolio_name} index</h3><small class="text-muted">3 days ago</small> </div>
             </div><!----><div class="col-md-2" style="margin-top:70px"><button type="button" class="btn btn-success btn-lg" style="position: absolute; right: 10px;">Chip in</button></div>
             </div>
           </a>`
       }
     }else{
       socialFeed+= `<div>Invite Some Friends!</div>`
     }

      
      
  socialFeed+=    `
  </div>
			</div>
			<div class="clearfix"> </div>
		</div>
		</div>
		</div>
		</div>
		<script>
		if(!localStorage.walkThroughOne){
			specificWalkThrough(".social-content");
			localStorage.walkThroughOne = true;
		}
		</script>
		`
		return socialFeed;
}

var mainDashBoardContent =`  <div class="main-dashboard">
    	
    	
    	<div class="col-md-6">
		<div class="middle-content" style="height:400px; border-style:none; box-shadow:none;padding-top:10px; padding-left:20px; padding-right:20px">
		    
		    <h2 style="text-align:center;">Tasks</h2><br>
	        <div class="row-fluid">
            <div class="btn-group btn-group-justified" style="height:80px;">
              <a href="#" class="btn btn-warning btn-lg" style="white-space: normal">Completed</a>
              <a href="#" class="btn btn-success btn-lg" style="white-space: normal;">Current tasks</a>
              <a href="#" class="btn btn-primary btn-lg" style="white-space: normal;">Upcoming tasks</a>
            </div>
            </div>
        
 <!----------------Cards---------------------->
        
            <div class="list-group" style="font-family:'Roboto'; font-size:16px; color:#666666; padding-top:1em"><% escape_javascript @user.tasks.each do |task| %>

                <a href="#" class="list-group-item clearfix list-group-item-action flex-column align-items-start" style="border-radius:0px">
                <div class="row">
                    
                    <div class="col-md-1"><h4 style="color:green"><i class="fa fa-check" aria-hidden="true"></i></h4>
                    </div><!----><div class="col-md-8 vcenter" style="height:80;border:0px solid #F00; padding-left:10px;"><h4><%= escape_javascript task.task%></h4>
                </div><!----><div class="col-md-3 vcenter" style="height:80;border:0px solid #F00; padding-left:10px;color:green"><h4>+0.5% Try</h4>
                </div>
                </div>
                </a>

                <% escape_javascript end %>
            </div>
</div></div><!----><div class="col-md-6">
				<div class="middle-content" style="padding-top:10px; padding-bottom:auto; padding-top:10px; padding-left:20px; padding-right:20px; margin-right:0px;border-style:none; box-shadow:none; border-radius:0px">
		      <p><h2 class="featurette-heading" style="text-align:center">Upcoming Features</h2><br>
				<span style="font-family:'Roboto'; color:Black; font-size:16px">
					<div class="list-group" style="border-radius:0px">
  						<a href="#" class="list-group-item active"  style="border-radius:0px">
    					Group investing - March 1st, 2017
  						</a>
  						<a href="#" class="list-group-item"  style="border-radius:0px">Levels in the social feed - March 15th, 2017
  						</a>
  						<a href="#" class="list-group-item"  style="border-radius:0px">IOS application - March 31st, 2017
  						</a>
    					<a href="#" class="list-group-item"  style="border-radius:0px">Real money investment - August 1st, 2017
  						</a>
					</div>
		      
		    </div>
			</div>
			</div>
`
const getPeopleInvestments = (endPoint)=>{
  $.ajax({
    type:'get',
    url:`/users/${endPoint}.json`,
    dataType:'json'
  }).done((data)=>{
    let friendsInvestments = socialContent(data);
    fader(socialContent(data),'.main-dashboard');
  });
}

var knowledgeContent = `
<div class="knowledge-content">
<div class="main-dashboard">
	<div class="middle-content" style="margin-top:0px; margin-bottom:10px; margin-left:10px; margin-right:10px;border-style:none; box-shadow:none " >
		
	<!------------Content title------------->	
	
		<div class="row-fluid" style="height:100px">
		<div class="col-sm-12" style="text-align:center"><p><h1>Here you get knowledge to understand finance</h1></p>
    </div>
    </div>
    
  <!------------------------->

    <div class="row-fluid">
    <div class="btn-group btn-group-justified" style="height:400px;">
      <a href="#" class="btn btn-warning btn-lg" style="white-space: normal">Learn basic finance concepts and understand them</a>
      <a href="#" class="btn btn-success btn-lg" style="white-space: normal;">Take a quiz, check that you got the topic and earn 10 virtual $ to invest</a>
      <a href="#" class="btn btn-primary btn-lg" style="white-space: normal;">Get some tips as you go to improve your investments</a>
    </div>
    </div>
    <br>
        
 <!----------------Cards---------------------->
        
    <div data-intro="I never quite understood all the apps that don't explain you finance. How can you invest if you do not have a clue what you are doing. We have made some basic cards for you that help you understand and learn finance. And its not for 'hedge Fund' kids, its for everyone." class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
    
    
      <a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
        <div class="row">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>What is investment?</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a href="#" class="list-group-item clearfix list-group-item-action flex-column align-items-start" style="border-radius:0px">
        <div class="row">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000"><img src="/assets/Rashidprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Stocks explained</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
        <div class="row">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>What is investment?</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>

      <a href="#" class="list-group-item clearfix list-group-item-action flex-column align-items-start" style="border-radius:0px">
        <div class="row">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000"><img src="/assets/Rashidprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Stocks explained</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  </div>
  		<script>
      if(!localStorage.specificWalkThroughTwo){
        specificWalkThrough(".knowledge-content");
          localStorage.specificWalkThroughTwo = true;
      }
		</script>`
  
  


// Imagine all the tech companies in the United States. This portfolio represents little portion of each of them. Apple, Amazon and Google and all of them
const etfList = (data)=>{
  let etfs = data['portfolios'];
  let userData = data['user'];
  let userLvl = $('#userLvl').val();
  var etf_list = `<div class=main-dashboard>`
  etf_list +=`<div class="etf-listing">`
  etf_list += `<div class="content-mid">`
  etf_list += `<div class="middle-content" style="padding-top:0px; margin-top:0px; margin-bottom:0px; margin-left:10px; margin-right:10px;border-style:none; box-shadow:none " >`
  etf_list += `<div class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;" >`;
  etf_list += `		<div class="row-fluid" style="height:80px; padding-top:0px">
		  <div class="col-sm-12" style="text-align:center; "><p><h1>Here you invest and get experience</h1></p>
      </div>
    </div>
  <!------------------------->

		<div class="row" style="padding-top:0px;">
		  <div data-intro="OMG there are only three portfolios to invest, but its just for now. As you progress and achieve new levels more portfolios will be available for you. Just keep swimming." class="col-md-10 col-md-offset-1" style="padding-top:0px;">
		      <br>
		      <p><h2 class="featurette-heading">Total Investment: <span style="color:green">$${userData.total_investments}</span></h2></p><br>
		      <p><h2 class="featurette-heading">Total Value: <span style="color:green">$${Math.round(userData.total_value * 100) / 100}</span></h2></p><br>
		      <p><h2 class="featurette-heading">Total Gain/Loss: <span style="color:green">$${Math.round((userData.total_value - userData.total_investments )* 100) / 100}</span></h2></p><br>
		      <p><h2 class="featurette-heading">ROI: <span style="color:green">${Math.round(userData.roi * 100) / 100}%</span></h2></p><br>
		  </div>
		</div>
		
		
	<!------------------------->	
	        <div class="col-md-12">
        <div class="row-fluid">
          <div class="btn-group btn-group-justified">
            <a href="#" class="btn btn-primary btn-lg">Robots</a>
            <a href="#" class="btn btn-primary btn-lg">My investments</a>
          </div>
        </div>
        <br>
		    
	<!------------Portfolio Listings------------->`
  etf_list += `<div>`
  for(var i=0; i<etfs.length; i++){
    let etfLvl = etfs[i].level;
           for(var z=0; z<etfs[i].portfolios.length; z++){
             let lvlEtf = etfs[i].portfolios[z];
      if(etfLvl == userLvl ){
              etf_list += ` <a href="#" class="list-group-item clearfix list-group-item-action align-items-start"  style="border-radius:0px">
        <div class="row">
          <div class="col-md-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/SPDR.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:30px;margin-bottom:10px">
          </div></div><!----><div class="col-md-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${lvlEtf.fiduty_name}</h3><small class="text-muted">Underlying Asset: ${lvlEtf.name} (${lvlEtf.symbol})</small>
          </div>
          </div><!----><div class="col-md-2" style="margin-top:20px;text-align:right"><h2 style="color:green">${lvlEtf.ytd}</h2><br><input type="hidden" id="portfolioId" value=${lvlEtf.id}></input><input type="hidden" id="portfolioId" value=${etfs[i].name}></input><button type="button" id="investbtn" class="btn btn-success btn-lg">Invest</button></div>
        </div>
        <div id="etf_detail" class="row" style="display:none;">
          <div class="col-md-3">
          </div><!----><div class="col-md-7 vcenter"><div style="height:80;border:0px solid #F00"><h4 style="color:green">Details:</h4><br>${lvlEtf.simple_description}.
          <br><br><span style="color:grey">
          ----> Here --- how many friends have invested or smth</span></div>
          </div><!----><div class="col-md-2" style="margin-top:20px;text-align:right"></div>
        </div>
      </a>`
      }else{
              etf_list += ` <a id="etf_grey" href="#" class="list-group-item clearfix list-group-item-action align-items-start"  style="border-radius:0px">
        <div class="row grayout" >
          <div class="col-md-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/SPDR.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:30px;margin-bottom:10px">
          </div></div><!----><div class="col-md-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${lvlEtf.fiduty_name}</h3><small class="text-muted">Underlying Asset: ${lvlEtf.name} (${lvlEtf.symbol})</small>
          </div>
          </div><!----><div class="col-md-2" style="margin-top:20px;text-align:right"><h2 style="color:green">${lvlEtf.ytd}</h2><br><input type="hidden" id="portfolioId" value=${lvlEtf.id}></input><input type="hidden" id="portfolioId" value=${etfs[i].name}></input><button type="button" id="investbtn_grey" class="btn btn-success btn-lg">Invest</button></div>
        </div>
        <div id="etf_detail" class="row" style="display:none;">
          <div class="col-md-3">
          </div><!----><div class="col-md-7 vcenter"><div style="height:80;border:0px solid #F00"><h4 style="color:green">Details:</h4><br>${lvlEtf.simple_description}.
          <br><br><span style="color:grey">
          ----> Here --- how many friends have invested or smth</span></div>
          </div><!----><div class="col-md-2" style="margin-top:20px;text-align:right"></div>
        </div>
      </a>`
      }

    }
   


}
  etf_list += `</div>`
  etf_list += `</div>`
  etf_list += `</div>`
  etf_list += `</div>`
  etf_list += `</div>`
  etf_list += `</div>`
  etf_list += 
  `
  <script>
    if(!localStorage.specificWalkThroughThree){
      specificWalkThrough(".etf-listing");
      localStorage.specificWalkThroughThree = true;
    }
  </script>
  `
  return etf_list  

}

  
 const getTenPortflios = ()=>{
                $.ajax({
            type: 'get',
            url: `/portfolios/ten_portfolios.json`,
            dataType: 'json'
          }).done(function(data) {
            var listing = etfList(data);
            fader(listing, '.main-dashboard');
            $('.box p').replaceWith(`<p>I never quite understood all the apps that don't explain you finance. How can you invest if you do not have a clue what you are doing. We have made some basic cards for you that help you understand and learn finance. And its not for 'hedge Fund' kids, its for everyone</p>`)
          });
} 

function fader(content, location){
           $(location).fadeOut("normal",function(){
           var div = $(location).hide();
           $(this).replaceWith((content));
           $(location).fadeIn("normal");
         })
}

function clickSocial(){
    $(document).on('click',"#social-tab",function(ev){
        ev.preventDefault();
        getPeopleInvestments(`recent_everyone_investment`);
        socialChoiceTabs();
    $('.box p').replaceWith(`<p>This is the coolest thing in our app. We believe that you will get far when surrounded by your friends</p>`)
 
    })
    
}

const socialChoiceTabs = ()=>{
   $(document).on('click',"#everyonebtn",(ev)=>{
    ev.preventDefault();
    getPeopleInvestments(`recent_everyone_investment`);
  })
  
  $(document).on('click','#friendsbtn',(ev)=>{
    getPeopleInvestments('recent_friend_investment');
  })
}

function clickAmount(){
  $(document).on('click', '#amount', function(ev){
    ev.preventDefault();
    $('#cashModal').modal('toggle');
     $('.box p').replaceWith(`<p>Would you really invest $100,000 in the next 5 years? I wouldn't, and probably you wouldn't too, so $10 is what I would really start with, and you get 10$ to invest. Guess what, even it is a virtual money, you gotta earn it. Click on it to see how you can do it. </p>`)
  })
}

// function clickDashBoard(){
//     $(document).on('click',"#dashboard-tab",function(ev){
//         ev.preventDefault();
//           fader(mainDashBoardContent, '.main-dashboard');
//     });
// }

function clickKnowledge(){
  $(document).on('click',"#knowledge-tab",function(ev){
    ev.preventDefault();
    fader(knowledgeContent,'.main-dashboard');
    
  })
  
}

function clickExperience(){
  $(document).on('click',"#experience-tab",function(ev){
    ev.preventDefault();
     getTenPortflios();
  })
}

const everyone = (data, d)=>{
  return `<div id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
  ${data.map( person=> 
    `<a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
    <div class="row">
      <div class="col-sm-3"><div style="height:140;border:0px solid #000">
      <img src="/assets/Rashidprofile.jpg" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
      </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${person.name} chipped in ${person.last_portfolio_name}</h3><small class="text-muted">${new Date().getDay(person.investment_date)} days ago</small> </div>
      </div><!----><div class="col-md-2" style="margin-top:90px"><button type="button" class="btn btn-success btn-lg" style="position: absolute; right: 10px;">Chip in</button></div>
      </div>
     </a>`
    )
  }
   </div>
  `
}



function friendsBtn(){
  var friends= `<div id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
  <a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
    <div class="row">
      <div class="col-sm-3"><div style="height:140;border:0px solid #000">
      <img src="/assets/Isuruprofile.jpg" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
      </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>Bob chipped in SPYDR POOP index</h3><small class="text-muted">3 days ago</small> </div>
      </div><!----><div class="col-md-2" style="margin-top:90px"><button type="button" class="btn btn-success btn-lg" style="position: absolute; right: 10px;">Chip in</button></div>
      </div>
     </a>
     </div>`
     
      $(document).on('click',"#friendsbtn",function(ev){
        ev.preventDefault();
        fader(friends,"#people");
    })
}

function scoreBoardBtn(){
  var scoreboard = `<div id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
 <a href="#" class="list-group-item clearfix list-group-item-action flex-column align-items-start" style="border-radius:0px">
<div class="row">
  <div class="col-sm-3"><div style="height:140;border:0px solid #000"><img src="/assets/Rashidprofile.jpg" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
  </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>Trump chipped in The Wall Fund</h3><small class="text-muted">3 days ago</small> </div></div>
  <div class="col-md-2" style="margin-top:90px"><button type="button" class="btn btn-success btn-lg" style="position: absolute; right: 10px;">Chip in</button></div>
  </div>
</a>
  </div>`
      $(document).on('click',"#scoreboardbtn",function(ev){
        ev.preventDefault();
        fader(scoreboard,"#people");
    })
}

const onClickETF = ()=>{
  $(document).on('click','#etf', (ev)=>{
    ev.preventDefault();
    const childDiv = $(ev.currentTarget).context.lastElementChild;
    // debugger;
    if ($(childDiv).is(':visible')){
      $(childDiv).slideUp();
    }else{
      $(childDiv).slideDown();
    }
  })
}

const openModal = ()=>{
  let signInCount = parseInt($('#sign_in_count').val());
  if (signInCount <= 1 && window.localStorage.count !="1"){
    $('#myModal').modal('toggle');
    window.localStorage.count="1";
  }
}
const updateInfo = ()=>{
        $(document).on('click','#update_user_info',(ev)=>{
        let name = $('#myModal #recipient-name').val();
        let email = $('#myModal #recipient-email').val();
        let phone = $('#myModal #recipient-phone').val();
         $.ajax({
            type: 'post',
            url: `/users/update`,
            dataType: 'json',
            data: {
              "user":{
              "name": name,
              "email": email,
              "phone": phone
            }
              
            }
          }).done(function(data) {
            alert("Info updated!")
             $('#myModal').modal('toggle');
             location.reload();
          });
  })
}
var counter = 0;
const clickNext = () =>{
  $(document).on('click', '#next', (ev)=>{
    ev.preventDefault(); 
    if(counter == 0){
       $('.box p').replaceWith(`<p>We think starting is already a big step forward, so we give you 3% in each skill. Hooray! </p>`)
       counter +=1;
       window.localStorage.box=1;
    }else if(counter == 1){
      $('.box p').replaceWith(`<p>Check the app and see where everything is located (each of the tasks is linked to a particular skill, you can see it by pointing on the feature it will show you what skill that feature increases)</p>`)
      counter +=1;
      window.localStorage.box=2;
    }else if(counter ==2){
       $('.box p').replaceWith(`<p>So lets just kick it. Ive created few tasks for you, as you finish them you will get to the second level and get more perks opened for you</p>`)
    }
  })
}

const defaultBox = () =>{
      if(window.localStorage.box == 0){
       $('.box p').replaceWith(`<p>We think starting is already a big step forward, so we give you 3% in each skill. Hooray! </p>`)
    }else if(window.localStorage.box == 1){
      $('.box p').replaceWith(`<p>Check the app and see where everything is located (each of the tasks is linked to a particular skill, you can see it by pointing on the feature it will show you what skill that feature increases)</p>`)
    }else if(window.localStorage.box ==2){
       $('.box p').replaceWith(`<p>So lets just kick it. Ive created few tasks for you, as you finish them you will get to the second level and get more perks opened for you</p>`)
    }
}

const sliderIntro = ()=>{
		jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});
}

const sliderNext = ()=>{
  $(document).on('click','#nextBtnSlider',(ev)=>{
    ev.preventDefault();
      $('.my-slider').unslider('next');
  })
}



const clickInvest = ()=>{
  $(document).on('click','#investbtn',(ev)=>{
    ev.preventDefault();
    let etfId = $($(ev.target.parentElement).context.childNodes[2]).val();
    let etfName = $($(ev.target.parentElement).context.childNodes[3]).val();
    $("#modalETFName").append(etfName);
    $("#etfID").val(etfId);
    // debugger;
    $('#investModal').modal('toggle');
  })
}

const submitInvest = ()=>{
  $(document).on('click', "#makeInvestment", (ev)=>{
    ev.preventDefault();
    let investmentAmount = $("#amountInvested").val()
    let portfolioId = $('#etfID').val();
             $.ajax({
            type: 'post',
            url: `/user_portfolios`,
            dataType: 'json',
            data: {
              "investment_amount": investmentAmount,
              "portfolio_id": portfolioId
            }
          }).done(function(data) {
            alert("Investment Made!")
             location.reload();
          });
  })
}
const messageFormat = (input)=>{
  return `                <li class="left clearfix" style="padding:0px">
                <div class="chat-body clearfix" style="padding:0px">
                <div class="header">
                <strong class="primary-font" style="color:rgba(51, 153, 204, 1)">Richie</strong> <small class="pull-right text-muted">
                <span class="glyphicon glyphicon-time"></span>14 mins ago</small>
                </div>
                        <p>
                            ${input}
                        </p>
                </div>
                </li>`
}

const userMessageFormat = (input, name)=>{
  return `                <li class="right clearfix" style="padding:0px">
                <div class="chat-body clearfix" style="padding:0px">
                <div class="header">
                <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>10 mins ago</small>
                <strong class="pull-right primary-font" style="color:rgba(51, 153, 204, 1)">${name}</strong>
                </div>
                     <p>
                        ${input}
                     </p>
                </div>
                </li>`
}

const ibmBlueMixSendMesssage = ()=>{
  $(document).on('submit','#watson',(ev)=>{
      ev.preventDefault();
      // $('ul.chat').append('<img id="typing" src="https://cdn.codemyui.com/wp-content/uploads/2015/06/iMessage-Typing-Indicator-in-CSS.gif"></img>')
    var message = '';
    if ($(`input.user-input`).val() === ''){
        message = $(`input.user-input2`).val();
    }else{
        message = $(`input.user-input`).val();
    }
    
     $('ul.chat').append(userMessageFormat(message, $('#username').val()));
       $(`input#user-input`).val('');
   $.ajax
    ({
       type: "POST",
        dataType: 'json',
        url: "/user_portfolios/watson_proxy.json",
        data: {"insert":{ "input": {"text": message } }}
    }).done(function(data) {
          $(`ul.chat`).append(messageFormat(data.output.text[0]));
          // $('.panel-body').animate({ scrollTop: $(document).height() }, "slow");
          // $('.chat-box').animate({ scrollTop: $(document).height() }, "slow");
          $(".panel-body").scrollTop($(".panel-body")[0].scrollHeight);
          $('.chat-box').scrollTop($(".chat-box")[0].scrollHeight);
          });
    
  });

}

  
  const openLargeChatBox = ()=>{
    $(document).on('click',"#openChatBoxModal", (ev)=>{
      ev.preventDefault();
      $('#chatbotModal').modal('toggle');
    })
  }
  
  const addPoint = (numPoints)=>{
    debugger;
        $.ajax
    ({
       type: "POST",
        dataType: 'json',
        url: "/users/add_points",
        data: numPoints
    }).done(function(data) {
        console.log('worked');
        location.reload();
       });
       
  }
  
  const addPoint_finishGuide = ()=>{
    $(document).on('click','button#closeModel', (ev)=>{
      console.log('closed');
      addPoint(1);
  });
}

// moves character and increments progress bar
const moveCharacter = ()=>{
  $('#userChar').animate({left: "+=8px"}, 100);
   $('#userPic').animate({left: "+=8px"}, 100);
   incrementProgess();
}

const incrementProgess = ()=>{
  let current_width = $('#myProgress').width();
  $('#myProgress').width( current_width += 8 );
}

const etfLocked = ()=>{
  $(document).on('click','a#etf_grey',(ev)=>{
    ev.preventDefault();
    alert("Sorry! You don't have access to this one yet, keep doing those tasks!")
  })

}

const mainWalkThrough = ()=>{
  let signInCount = $('#userSignInCount').val();
  let points = $('#onboarding').val();
  if (signInCount <=1 && points == '1' && localStorage.dashboardWalkThrough!= '1'){
  		var tour = introJs()
			tour.setOption('tooltipPosition', 'auto');
			tour.start()
			localStorage.dashboardWalkThrough = '1';
  }
  
}

const specificWalkThrough = (element)=>{
  let signInCount = $('#userSignInCount').val();
  let points = $('#onboarding').val();
  // && localStorage.specificWalkThrough != 2
  if (signInCount <=1 && points == '1'){
      var tour = introJs(element);
			tour.setOption('tooltipPosition', 'auto');
			tour.start();
  }
  
};

$(document).ready(function(){
    clickSocial();
    // clickDashBoard();
    friendsBtn();
    scoreBoardBtn();
    clickKnowledge();
    clickExperience();
    onClickETF();
    etfLocked();
    updateInfo();
    openModal();
    clickAmount();
    clickNext();
    // defaultBox();
     sliderIntro();
     sliderNext();
     clickInvest();
     submitInvest();
     ibmBlueMixSendMesssage();
     openLargeChatBox();
     addPoint_finishGuide();
     mainWalkThrough();
})

// git push git@github.com:isuruv/Fiduty.git  cloud9_2:cloud9_2
