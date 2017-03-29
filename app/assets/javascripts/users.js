console.log("users js");
function socialContent(users){ 

var socialFeed = `<div class="main-dashboard">
  <div class="social-content">
		<div class="content-mid">
				<div>
                <div >
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
       
<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`
     
     if (users.length > 0){
      
       for(var i=0; i<users.length; i++){
          socialFeed += `<a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
            <div class="row">
             <div class="col-sm-3"><div style="height:140;border:0px solid #000">
              <img src="${users[i].image}?type=large" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
             </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px"><div style="border:0px solid #F00"><h3>${users[i].name} chipped in ${users[i].last_portfolio_name} index</h3><small class="text-muted">3 days ago</small> </div>
             </div><!----><div class="col-md-9 text-right"><button type="button" class="btn btn-success btn-lg">Chip in</button></div>
             </div>
           </a>`
       }
     }else{
       socialFeed+= `<div>Invite Some Friends!</div>`
     }

      
      
  socialFeed+=`</div>
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
		</script>`
		return socialFeed;
}

function socialContentFriendList(users){
  var socialfeed = `<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`
       if (users.length >0){
      
       for(var i=0; i< users.length; i++){
          socialfeed +=  `<a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
            <div class="row">
             <div class="col-sm-3"><div style="border:0px solid #000">
              <img src="${users[i].image}?type=large" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
             </div>
             </div>
             <div class="col-sm-7" style="margin-top:30px"><div style="border:0px solid #F00"><h3>${users[i].name} chipped in ${users[i].last_portfolio_name} index</h3><small class="text-muted">3 days ago</small> </div>
             </div>
             <div class="col-md-9 text-right" ><button type="button" class="btn btn-success btn-lg">Chip in</button></div>
             </div>
           </a>`
       }
     }else{
       socialfeed+= `<div>Invite Some Friends!</div>`
     }
     socialfeed += `<div>`
     return socialfeed;
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
			</div>`

function getPeopleInvestments(endPoint, render = socialContent, place='.main-dashboard'){
  $.ajax({
    type:'get',
    url:`/users/${endPoint}.json`,
    dataType:'json'
  }).done(function(data){
   
    
    fader(render(data),place);
  });
};

function quizList(){
  return `<div id="knowlegeContent" data-intro="I never quite understood all the apps that don't explain you finance. How can you invest if you do not have a clue what you are doing. We have made some basic cards for you that help you understand and learn finance. And its not for 'hedge Fund' kids, its for everyone." class="list-group" style="margin-left:14px;margin-right:14px;font-family:'Roboto'; font-size:14px; color:#666666;">
        <a id="" data-toggle="modal" data-target="#QuizModal" href="#" style="border-radius:0px">
        <div class="row list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentation1icon2.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Which One is an Investment?</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Pick the Stock</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
  </div>`
}
function understandList(){

  return `<div id="knowlegeContent" data-intro="I never quite understood all the apps that don't explain you finance. How can you invest if you do not have a clue what you are doing. We have made some basic cards for you that help you understand and learn finance. And its not for 'hedge Fund' kids, its for everyone." class="list-group" style="margin-left:14px;margin-right:14px;font-family:'Roboto'; font-size:14px; color:#666666;">
    
    <a id="" data-toggle="modal" data-target="#LessonModal" href="#" style="border-radius:0px">
        <div class="row list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentation1icon2.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>What is investing?</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Stocks</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
       <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Bonds</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understanding Return</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Interest</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Risk</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Portfolio</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>What is Diversification</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Know ETFs and Robots</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
     <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Goals Are Important When Investing</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Investment Implies Long Term</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Important of General Financial Health</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Trading vs. Investing</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    
     <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understanding Major Financial Ratios</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
    <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Future Value of Money</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Taxation Principles</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Legal Principles</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    
    <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Know Options</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    
     <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start" style="min-height:130px">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Presentation 1/Presentationempty.svg" class="img img-fluid" alt="Cinque Terre" width-max="100" height="100" style="margin-top:5px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Know Futures</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
   </div>`
}

function knowledgeContent(renderList = understandList ){
return `<div class="knowledge-content">
<div class="main-dashboard">
	<div  >
		
	<!------------Content title------------->	
	
		<div class="row-fluid" style="margin-bottom: 5%">
		  <div class="text-center">
		    <h1>Here you get knowledge to understand finance</h1>
      </div>
    </div>
    
  <!------------------------->

    <div class="row-fluid">
    <div class="btn-group btn-group-justified" style="height:100px;">
      <a id="understand-selection" href="#" class="btn btn-warning btn-lg" style="white-space: normal"><h2>Learn</h2></a>
      <a id="quiz-selection" href="#" class="btn btn-success btn-lg" style="white-space: normal;"><h2>Play</h2></a>
      <a href="#" class="btn btn-primary btn-lg" style="white-space: normal;"><h2>Tips</h2></a>
    </div>
    </div>
    <br>
        
 <!----------------Cards---------------------->
        
    
      ${renderList()}
      
  </div>
  </div>
  		<script>
      if(!localStorage.specificWalkThroughTwo){
        specificWalkThrough(".knowledge-content");
          localStorage.specificWalkThroughTwo = true;
      }
		</script>`
}
  
  


// Imagine all the tech companies in the United States. This portfolio represents little portion of each of them. Apple, Amazon and Google and all of them
function etfList(data){
  var etfs = data['portfolios'];
  var userData = data['user'];
  var userLvl = $('#userLvl').val();
  var etf_list = `<div class=main-dashboard>`
  etf_list +=`<div class="etf-listing">`
  etf_list += `<div class="content-mid">`
  etf_list += `<div class="middle-content" style="padding-top:0px; margin-top:0px; margin-bottom:0px; margin-left:10px; margin-right:10px;border-style:none; box-shadow:none " >`
  etf_list += `<div class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;" >`
  etf_list += `<div class="row-fluid" style="margin-bottom: 2%; padding-top:0px">
		  <div class="text-center"><h1>Here you invest and get experience</h1>
      </div>
    </div>
  <!------------------------->

		<div class="row" style="padding-top:10px;">
		  <div class="col-md-10 col-md-offset-1" style="padding-top:10px;">
		      <br>
		      <p><h2 class="featurette-heading">Total Investment: <span style="color:${userData.total_investments >=0 ? 'green' : 'red'}">$${userData.total_investments}</span></h2></p><br>
		      <p><h2 class="featurette-heading">Total Value: <span style="color:${userData.total_value >= userData.total_investments ? 'green' : 'red'}">$${Math.round(userData.total_value * 100) / 100}</span></h2></p><br>
		      <p><h2 class="featurette-heading">Total Gain/Loss: <span style="color:${(userData.total_value - userData.total_investments) >= 0 ? 'green': 'red'}">$${Math.round((userData.total_value - userData.total_investments )* 100) / 100}</span></h2></p><br>
		      <p><h2 class="featurette-heading">ROI: <span style="color:${userData.roi >= 0 ? 'green' : 'red'}">${Math.round(userData.roi * 100)}%</span></h2></p><br>
		  </div>
		</div>
		
		
	<!------------------------->	
	     <div class="row"
	     <div class="col-md-12">
        <div class="row-fluid">
          <div class="btn-group btn-group-justified" data-intro="OMG there are only three portfolios to invest, but its just for now. As you progress and achieve new levels more portfolios will be available for you. Just keep swimming.">
            <a href="#" class="btn btn-primary btn-lg">Robots</a>
            <a href="#" class="btn btn-primary btn-lg">My investments</a>
          </div>
        </div>
        <br>
        </div>
	<!------------Portfolio Listings------------->`;
	
  etf_list += `<div class="row">`
  for(var i=0; i<etfs.length; i++){
    var etfLvl = etfs[i].level;
           for(var z=0; z<etfs[i].portfolios.length; z++){
             var lvlEtf = etfs[i].portfolios[z];
      if(etfLvl == userLvl ){
        
              etf_list += ` <a href="#" id=${lvlEtf.symbol} class="list-group-item clearfix list-group-item-action align-items-start etf" style="border-radius:0px">
        <div id=${lvlEtf.fiduty_name} class="row">
          <div class="col-md-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/SPDR.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:30px;margin-bottom:10px">
          </div></div><!----><div class="col-md-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${lvlEtf.fiduty_name}</h3><small class="text-muted">Underlying Asset: ${lvlEtf.name} (${lvlEtf.symbol})</small>
          </div>
          </div><!----><div class="col-md-2" style="margin-top:20px;text-align:right"><h2 style="color:${!!lvlEtf.ytd.match(/-/g)? 'red': 'green'}">${lvlEtf.ytd}</h2><br><input type="hidden" id="portfolioId" value=${lvlEtf.id}></input><input type="hidden" id="portfolioId" value=${etfs[i].name}></input><button type="button" id="investbtn" class="btn btn-success btn-lg">Invest</button></div>
        </div>
        <div id="etf_detail${lvlEtf.symbol}" class="row" style="display:none;">
          <div class="col-md-3">
          </div><!----><div class="col-md-7 vcenter"><div id="thisdiv" style="height:80;border:0px solid #F00"><h4 style="color:green">Details:</h4><br>${lvlEtf.simple_description}.
          <br><br><span style="color:grey">
          </span></div>
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
        <div id="etf_detail${lvlEtf.symbol}" class="row etf_list_item" style="display:none;">
          <div class="col-md-3">
          </div><!----><div class="col-md-7 vcenter"><div style="height:80;border:0px solid #F00"><h4 style="color:green">Details:</h4><br>${lvlEtf.simple_description}.
          <br><br><span style="color:grey">
          </span></div>
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
  etf_list += `<script>
    if(!localStorage.specificWalkThroughThree){
      specificWalkThrough(".etf-listing");
      localStorage.specificWalkThroughThree = true;
    }
  </script>`
  return etf_list  

}

  
function getTenPortflios(){
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

function socialChoiceTabs(){
   $(document).on('click',"#everyonebtn",function(ev){
    ev.preventDefault();
    
    getPeopleInvestments(`recent_everyone_investment`, socialContent);
  });
  
  $(document).on('click','#friendsbtn',function(ev){
    ev.preventDefault();
    getPeopleInvestments('recent_friend_investment', socialContentFriendList, '#friendsList');
  });
  
  $(document).on('click','#scoreboardbtn', function(ev){
      ev.preventDefault();
      getPeopleInvestments('scoreboard', scoreboardContent, '#friendsList');
  });
}

function clickAmount(){
  $(document).on('click', '#amount', function(ev){
    ev.preventDefault();
    $('#cashModal').modal('toggle');
     $('.box p').replaceWith(`<p>Would you really invest $100,000 in the next 5 years? I wouldn't, and probably you wouldn't too, so $10 is what I would really start with, and you get 10$ to invest. Guess what, even it is a virtual money, you gotta earn it. Click on it to see how you can do it. </p>`)
  })
}

function clickKnowledge(){
  $(document).on('click',"#knowledge-tab",function(ev){
    ev.preventDefault();
    fader(knowledgeContent(),'.main-dashboard');
    
  })
  $(document).on('click',"#quiz-selection", function(ev){
    ev.preventDefault();
     fader(quizList(), '#knowlegeContent');
  })
    $(document).on('click',"#understand-selection", function(ev){
    ev.preventDefault();
    // fader(understandList(),'#knowledgeContent');
    fader(knowledgeContent(),'.main-dashboard');
  })
  
}

function clickTasks(){
  $(document).on('click',"#Understand",function(ev){
    ev.preventDefault();
    fader(knowledgeContent(),'.main-dashboard');
    
  })
  $(document).on('click',"#Co-Invest", function(ev){
    ev.preventDefault();
    clickSocial();
  })
    $(document).on('click',"#Invest", function(ev){
    ev.preventDefault();
    getTenPortflios();
  })
  
}


function clickExperience(){
  $(document).on('click',"#experience-tab",function(ev){
    ev.preventDefault();
     getTenPortflios();
  })
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

function scoreboardContent(people){
  var scoreboard = `<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`;
  scoreboard += `<div class="col-sm-6">
        <h1 style="text-align:center">Top 3 World<br>
        My place:<span style="color:green">134</span>
        </h1><br>
        <div class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`;
        
          people.everyone.map(function(person){
          scoreboard += `<a href="#" id="etf" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
        <div class="row">
          <div class="col-md-3">
          <div style="height:140;border:0px solid #000">
          <img src="${person.image}?type=large" class="img img-fluid img-circle" alt="Cinque Terre" width="100" height-max="100" style="margin-top:10px;margin-bottom:10px">
          </div></div><!----><div class="col-md-6 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${person.name}</h3><small class="text-muted">Current Level: ${person.level.level}</small>
          </div>
          </div><!----><div class="col-md-3" style="margin-top:20px;text-align:right"><h2 style="color:${person.total_roi >= 0 ? 'green' : 'red'}">${(person.total_roi*100).toFixed(2)}%</h2><br><button type="button" class="btn btn-success btn-lg">More</button></div>
        </div>
      </a>`
          })
          scoreboard+= `</div>`
          scoreboard+= `</div>`
        
        scoreboard += `<div id="friends" class="col-sm-6">
        <h1 style="text-align:center">Top 3 Friends<br>
        My place:<span style="color:green">14</span></h1><br>
        <div class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`
        
        people.friends.map(function(person){
          scoreboard += `
      <a href="#" id="etf" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
        <div class="row">
          <div class="col-md-3">
          <div style="height:140;border:0px solid #000">
          <img src="${person.image}?type=large" class="img img-fluid img-circle" alt="Cinque Terre" width="100" height-max="100" style="margin-top:10px;margin-bottom:10px">
          </div></div><!----><div class="col-md-6 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${person.name}</h3><small class="text-muted">Current Level: ${person.level.level}</small>
          </div>
          </div><!----><div class="col-md-3" style="margin-top:20px;text-align:right"><h2 style="color:${person.total_roi >= 0 ? 'green' : 'red'}">${(person.total_roi*100).toFixed(2)}%</h2><br><button type="button" class="btn btn-success btn-lg">More</button></div>
        </div>
      </a>`
        });
        scoreboard += `</div>`;
        scoreboard += `</div>`;
        scoreboard+= `</div>`;
        
  
 

  scoreboard +=`<div>`
  return scoreboard; 
}

function everyone(data, d){
  return `<div id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
  ${data.map( function(person){
    `<a href="#" class="list-group-item clearfix list-group-item-action align-items-start" style="border-radius:0px">
    <div class="row">
      <div class="col-sm-3"><div style="height:140;border:0px solid #000">
      <img src="/assets/Rashidprofile.jpg" class="img-circle img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
      </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px"><div style="height:80;border:0px solid #F00"><h3>${person.name} chipped in ${person.last_portfolio_name}</h3><small class="text-muted">${new Date().getDay(person.investment_date)} days ago</small> </div>
      </div><!----><div class="col-md-2" style="margin-top:90px"><button type="button" class="btn btn-success btn-lg" style="position: absolute; right: 10px;">Chip in</button></div>
      </div>
    </a>`
  }
    )
  }
  </div>
  `
}


function etfDetails(){
  $(document).on('click','.etf', function(ev){
    ev.preventDefault();
  
    $(`#etf_detail${ev.currentTarget.id}`).toggle('slow');
  });
}

function openFacebookModal(){
  var signInCount = parseInt($('#userSignInCount').val());
  if (signInCount <= 1 && !window.localStorage.opened){
    $('#facebookModal').modal('toggle');
    window.localStorage.opened=true;
  }
}

var counter = 0;
function clickNext(){
  $(document).on('click', '#next', function(ev){
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


function showOnboardingSlider(){
  // Onboarding slider
  $('#onboarding-slider').slick({
      adaptiveHeight: false,
      arrows: true,
      nextArrow: '<button class="slider-next">next</button>',
      prevArrow: '',
      infinite: false,
  });
  
  $('#onboarding-slider').on('beforeChange', function(slick, currentSlide, nextSlide){
      // action for last slide only
      
      if(currentSlide.currentSlide == (currentSlide.slideCount-2)){
          
          $('.slider-next').text('start').attr('id', 'closeModal');
          // $('.slider-next').text('start').attr('id','closeModal');
      }
  });
}

function clickInvest(){
  $(document).on('click','#investbtn',function(ev){
    ev.preventDefault();
    var etfId = $($(ev.target.parentElement).context.childNodes[2]).val();
    var etfName = $($(ev.target.parentElement).context.childNodes[3]).val();
    $("#modalETFName").append(etfName);
    $("#etfID").val(etfId);
  
    $('#investModal').modal('toggle');
  })
}

function submitInvest(){
  $(document).on('click', "#makeInvestment", function(ev){
    ev.preventDefault();
    var investmentAmount = $("#amountInvested").val()
    var portfolioId = $('#etfID').val();
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
function richieMessageFormat(input){
  return `<li class="msg msg-richie">
                        <div class="msg-header clearfix">
                            <strong class="msg-author">Richie</strong> 
                            <small class="msg-time text-muted">
                                <span class="glyphicon glyphicon-time"></span>
                                14 mins ago
                            </small>
                        </div>
                        <div class="msg-body">
                            <p>${input}</p>
                        </div>
                    </li>`
}

function userMessageFormat(input, name){
  return `<li class="msg msg-user" >
                        <div class="msg-header clearfix">
                            <strong class="msg-author" >${name}</strong> 
                            <small class="msg-time text-muted">
                                <span class="glyphicon glyphicon-time"></span>
                                14 mins ago
                            </small>
                        </div>
                        <div class="msg-body">
                            <p>${input}</p>
                        </div>
                    </li>`
}

function ibmBlueMixSendMesssage(){
  $(document).on('submit','#watson',function(ev){
      ev.preventDefault();
      // $('ul.chat').append('<img id="typing" src="https://cdn.codemyui.com/wp-content/uploads/2015/06/iMessage-Typing-Indicator-in-CSS.gif"></img>')
    var message = '';
    if ($(`input#user-input`).val() === ''){
        message = $(`input#user-input2`).val();
    }else{
        message = $(`input#user-input`).val();
        
    }
    
     $('ul.chat').append(userMessageFormat(message, $('#username').val()));
       $(`input.chat-input`).val('');
   $.ajax
    ({
       type: "POST",
        dataType: 'json',
        url: "/user_portfolios/watson_proxy.json",
        data: {"insert":{ "input": {"text": message } }}
    }).done(function(data) {
          $(`ul.chat`).append(richieMessageFormat(data.output.text[0]));
          // $('.panel-body').animate({ scrollTop: $(document).height() }, "slow");
          // $('.chat-box').animate({ scrollTop: $(document).height() }, "slow");
          $(".chat-content").scrollTop($(".chat-content")[0].scrollHeight);
          $('.chat-box').scrollTop($(".chat-box")[0].scrollHeight);
          

          });
    
  });

}

function openLargeChatBox(){
  $(document).on('click',"#openChatBoxModal", function(ev){
    ev.preventDefault();
    $('#chatbotModal').modal('toggle');
  })
}
function minimizeChatBox(){
  
  $(document).on('click',"#minimizeChatBox", function(ev){
    ev.preventDefault();
    $('.chat-box-fixed').addClass('minimized');
  });
  
  $(window).on('resize', function(){
    if($(window).width()<600){
      $('.chat-box-fixed').addClass('minimized');
    }
  });
}
function restoreChatBox(){
  if($(window).width()>600){
    $('.chat-box-fixed').removeClass('minimized');
  }
  $(document).on('click', "#restoreChatBox", function(ev){
    ev.preventDefault();
    $('.chat-box-fixed').removeClass('minimized');
  });
  $(document).on('click', ".title-text", function(ev){
    ev.preventDefault();
    $('.chat-box-fixed').toggleClass('minimized');
  })
}

function addPoint(numPoints){
  
        $.ajax
    ({
       type: "POST",
        dataType: 'json',
        url: "/users/add_points",
        data: numPoints
    }).done(function(data) {
        console.log('worked');
        // location.reload();
       });
       
  }
  
function addPoint_finishGuide(){
    $(document).on('click','button#closeModel', function(ev){
      console.log('closed');
      $('#onboardingdiv').attr('style','display: none');
      // mainWalkThrough();
      addPoint(1);
      openFacebookModal();
  });
}

// moves character and increments progress bar
function moveCharacter(){
  var lvl = $('#userLvl').val();
  if(lvl) {
      $('#progressUserChar').css('margin-left', lvl+'%');
      $('#progressUserBar').css('width', lvl+'%');
  }
}


function etfLocked(){
  $(document).on('click','a#etf_grey',function(ev){
    ev.preventDefault();
    alert("Sorry! You don't have access to this one yet, keep doing those tasks!")
  })

}

function mainWalkThrough(){
    debugger;
    // ev.preventDefault();
      var signInCount = parseInt($('#userSignInCount').val());
      var points = $('#onboarding').val();
    if (signInCount <=1 && localStorage.dashboardWalkThrough!= '1'){
  		var tour = introJs()
			tour.setOption('tooltipPosition', 'auto');
			tour.start()
			localStorage.dashboardWalkThrough = '1';
  }
// points == '1' 

}

function specificWalkThrough(element){
  var signInCount = parseInt($('#userSignInCount').val());
  var points = $('#onboarding').val();
  // && localStorage.specificWalkThrough != 2
  if (signInCount <=1 && points == '1'){
      var tour = introJs(element);
			tour.setOption('tooltipPosition', 'auto');
			tour.start();
  }
  
};

function mobileMenu(){
  var menu = $('#mobile-menu'),
      menuStart = $('#menu-start'),
      overlay = $('.menu-overlay'),
      profileToggle = $('.menu_user'),
      menuProfile = $('.menu_profile'),
      menuItem = $('.menu_label'),
      body = $('body');
      
  menuStart.click(function(e){
    e.preventDefault();
    menu.addClass('active');
    body.addClass('no-scroll');
    overlay.show();
  });
  
  menuItem.click(function(e){
    menu.removeClass('active');
    body.removeClass('no-scroll');
    overlay.hide();
  });
  
  overlay.click(function(e){
    menu.removeClass('active');
    body.removeClass('no-scroll');
    overlay.hide();
  });
  
  profileToggle.click(function(){
    menuProfile.slideToggle();
  });
};

function updateInfo(){
        $(document).on('click','#update_user_info',function(ev){
          mainWalkThrough();
        var name = $('#facebookModal #user_name').val();
        var email = $('#facebookModal #user_email').val();
        var age = $('#facebookModal #user_age').val();
        var gender = $('#facebookModal #user_gender').val();
        var location = $('#facebookModal #user_location').val();
        var birthday = $('#facebookModal #user_birthday').val();
         $.ajax({
            type: 'post',
            url: `/users/update`,
            dataType: 'json',
            data: {
              "user":{
              "name": name,
              "email": email,
              "age_range": age,
              "gender": gender,
              "locale": location,
              "birthday": birthday
            }
              
            }
          }).done(function(data) {
            $('span.h4').text(name) 
            alert("Thanks!");
          });
  })
}

function correctAnswer(){
  $(document).on('click', 'button#choice1',function(ev){
    ev.preventDefault();
    $(this).toggleClass('btn btn-success');
    $('#choice2').toggleClass('btn btn-default');
    // $( '#choice1' ).trigger( "click" );
    $('#choiceDesc').text('Hell yeah! If you get from your 2.1 GPA to the wished 3.0 because of the Mac')
    $('#choiceAmount').text('$1');
  });
  
  $(document).on('click', 'button#choice2', function(ev){
    ev.preventDefault();
    $('#choice1').toggleClass('btn btn-default');
    // $( '#choice2' ).trigger( "click" );
    $(this).toggleClass('btn btn-danger');
    $('#choiceDesc').text('I know you feel the Bern but bro it is not an investment');
    $('#choiceAmount').text('$0');
  })
  
}

$(document).ready(function(){
  clickSocial();
  showOnboardingSlider();
  friendsBtn();
  clickKnowledge();
  clickExperience();
  moveCharacter();
  etfDetails();
  etfLocked();
  updateInfo();
  mobileMenu();
  clickAmount();
  clickNext();
  clickInvest();
  submitInvest();
  ibmBlueMixSendMesssage();
  openLargeChatBox();
  minimizeChatBox();
  restoreChatBox();
  addPoint_finishGuide();
  correctAnswer();
  clickTasks();
})

// git push git@github.com:isuruv/Fiduty.git  cloud9_2:cloud9_2

// $('#facebookModal').modal('toggle');