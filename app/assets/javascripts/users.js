console.log("users js");
function socialContent(users){ 

let socialFeed = `
<div class="main-dashboard">
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
       
<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
     `
     
     if (users.length > 0){
      
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

function socialContentFriendList(users){
  let socialFeed = `<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`
       if (users.length >0){
      
       for(let i=0; i< users.length; i++){
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
     socialFeed += `<div>`
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

function getPeopleInvestments(endPoint, render = socialContent, place='.main-dashboard'){
  $.ajax({
    type:'get',
    url:`/users/${endPoint}.json`,
    dataType:'json'
  }).done(function(data){
    // let friendsInvestments = renderFunction(data);
    
    fader(render(data),place);
  });
};

function quizList(){
  return `
  <div id="knowlegeContent" data-intro="I never quite understood all the apps that don't explain you finance. How can you invest if you do not have a clue what you are doing. We have made some basic cards for you that help you understand and learn finance. And its not for 'hedge Fund' kids, its for everyone." class="list-group" style="margin-left:14px;margin-right:14px;font-family:'Roboto'; font-size:14px; color:#666666;">
        <a id="" data-toggle="modal" data-target="#QuizModal" href="#" style="border-radius:0px">
        <div class="row list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="https://si.wsj.net/public/resources/images/BN-RO426_buy_se_P_20170110033425.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Which One is an Investment?</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="data:image/jpeg;base64,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" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Pick the Stock</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
  </div>
  `
}
function understandList(){

  return `
  <div id="knowlegeContent" data-intro="I never quite understood all the apps that don't explain you finance. How can you invest if you do not have a clue what you are doing. We have made some basic cards for you that help you understand and learn finance. And its not for 'hedge Fund' kids, its for everyone." class="list-group" style="margin-left:14px;margin-right:14px;font-family:'Roboto'; font-size:14px; color:#666666;">
    
    <a id="" data-toggle="modal" data-target="#LessonModal" href="#" style="border-radius:0px">
        <div class="row list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="http://www.nomorewaffles.com/wp-content/uploads/2014/09/investing-diversified-portfolio.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>What is investing?</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="data:image/jpeg;base64,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" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Stocks</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
       <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="http://i2.cdn.turner.com/money/dam/assets/150415113649-cracking-bonds-780x439.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Bonds</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="http://beetfusion.com/sites/default/files/ROI.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understanding Return</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="http://beetfusion.com/sites/default/files/ROI.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Interest</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="http://www.churchillinvestments.co.uk/userfiles/images/risk-return.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Risk</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="http://www.dividendstocksrock.com/wp-content/uploads/2013/10/portfolio.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Portfolio</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="https://i1.wp.com/dollarsandsense.sg/wp-content/uploads/2017/02/Diversification.jpg?fit=1600%2C1097" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>What is Diversification</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="https://401ktv.com/wp-content/uploads/2016/09/ETFs.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Know ETFs and Robots</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
     <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="https://investandimprove.files.wordpress.com/2012/04/on_target.png" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Goals Are Important When Investing</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="https://blog.appianroad.com/wp-content/uploads/2015/09/long-term-investment-sketch-700x327.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Investment Implies Long Term</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Important of General Financial Health</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Trading vs. Investing</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    
     <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understanding Major Financial Ratios</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
    <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Future Value of Money</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Understand Taxation Principles</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
      
      <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Legal Principles</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    
    <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Know Options</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
    
     <a id="etf_grey" href="#" style="border-radius:0px">
        <div class="row grayout list-group-item clearfix list-group-item-action align-items-start">
          <div class="col-sm-3">
          <div style="height:140;border:0px solid #000">
          <img src="/assets/Isuruprofile.jpg" class="img img-fluid" alt="Cinque Terre" width="100" height-max="100" style="margin-top:20px">
          </div></div><!----><div class="col-sm-7 vcenter" style="margin-top:30px">
          <div style="height:80;border:0px solid #F00"><h2>Know Futures</h2><small class="text-muted">3 days ago</small>
          </div>
          </div>
        </div>
      </a>
   </div>
  `
}

function knowledgeContent(renderList = understandList ){
return `
<div class="knowledge-content">
<div class="main-dashboard">
	<div  >
		
	<!------------Content title------------->	
	
		<div class="row-fluid" style="height:100px">
		<div class="col-sm-12" style="text-align:center"><p><h1>Here you get knowledge to understand finance</h1></p>
    </div>
    </div>
    
  <!------------------------->

    <div class="row-fluid">
    <div class="btn-group btn-group-justified" style="height:400px;">
      <a id="understand-selection" href="#" class="btn btn-warning btn-lg" style="white-space: normal">Learn basic finance concepts and understand them</a>
      <a id="quiz-selection" href="#" class="btn btn-success btn-lg" style="white-space: normal;">Take a quiz, check that you got the topic and earn 10 virtual $ to invest</a>
      <a href="#" class="btn btn-primary btn-lg" style="white-space: normal;">Get some tips as you go to improve your investments</a>
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
		  <div class="col-md-10 col-md-offset-1" style="padding-top:0px;">
		      <br>
		      <p><h2 class="featurette-heading">Total Investment: <span style="color:${userData.total_investments >=0 ? 'green' : 'red'}">$${userData.total_investments}</span></h2></p><br>
		      <p><h2 class="featurette-heading">Total Value: <span style="color:${userData.total_value >= userData.total_investments ? 'green' : 'red'}">$${Math.round(userData.total_value * 100) / 100}</span></h2></p><br>
		      <p><h2 class="featurette-heading">Total Gain/Loss: <span style="color:${(userData.total_value - userData.total_investments) >= 0 ? 'green': 'red'}">$${Math.round((userData.total_value - userData.total_investments )* 100) / 100}</span></h2></p><br>
		      <p><h2 class="featurette-heading">ROI: <span style="color:${userData.roi >= 0 ? 'green' : 'red'}">${Math.round(userData.roi * 100)}%</span></h2></p><br>
		  </div>
		</div>
		
		
	<!------------------------->	
	        <div class="col-md-12">
        <div class="row-fluid">
          <div class="btn-group btn-group-justified" data-intro="OMG there are only three portfolios to invest, but its just for now. As you progress and achieve new levels more portfolios will be available for you. Just keep swimming.">
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

// function clickDashBoard(){
//     $(document).on('click',"#dashboard-tab",function(ev){
//         ev.preventDefault();
//           fader(mainDashBoardContent, '.main-dashboard');
//     });
// }

function clickKnowledge(){
  $(document).on('click',"#knowledge-tab",function(ev){
    ev.preventDefault();
    fader(knowledgeContent(),'.main-dashboard');
    
  })
  $(document).on('click',"#quiz-selection", function(ev){
    ev.preventDefault();
    fader(quizList(),'#knowlegeContent');
  })
    $(document).on('click',"#understand-selection", function(ev){
    ev.preventDefault();
    fader(understandList(),'#knowlegeContent');
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
  let scoreboard = `<div id="friendsList" data-intro="This is the coolest thing in our app. We believe that you will get far when surrounded by your friends" id="people" class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">`;
  scoreboard += `<div class="col-sm-6">
        <h1 style="text-align:center">Top 3 World<br>
        My place:<span style="color:green">134</span>
        </h1><br>
        <div class="list-group" style="font-family:'Roboto'; font-size:14px; color:#666666;">
          `;
          people.everyone.map(function(person){
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
    // etf_detail${lvlEtf.name}
    $(`#etf_detail${ev.currentTarget.id}`).toggle('slow');
  });
}

function openModal(){
  let signInCount = parseInt($('#userSignInCount').val())
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
          
          $('.slider-next').text('start').attr('id', 'closeModel');
      }
  });
}

function clickInvest(){
  $(document).on('click','#investbtn',function(ev){
    ev.preventDefault();
    let etfId = $($(ev.target.parentElement).context.childNodes[2]).val();
    let etfName = $($(ev.target.parentElement).context.childNodes[3]).val();
    $("#modalETFName").append(etfName);
    $("#etfID").val(etfId);
  
    $('#investModal').modal('toggle');
  })
}

function submitInvest(){
  $(document).on('click', "#makeInvestment", function(ev){
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
function richieMessageFormat(input){
  return `                    <li class="msg msg-richie">
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
  return `                    <li class="msg msg-user" >
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
  $(document).on('click',"#restoreChatBox", function(ev){
    ev.preventDefault();
    $('.chat-box-fixed').removeClass('minimized');
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
        location.reload();
       });
       
  }
  
function addPoint_finishGuide(){
    $(document).on('click','button#closeModel', function(ev){
      console.log('closed');
      addPoint(1);
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
  let signInCount = parseInt($('#userSignInCount').val());
  let points = $('#onboarding').val();
  if (signInCount <=1 && points == '1' && localStorage.dashboardWalkThrough!= '1'){
  		var tour = introJs()
			tour.setOption('tooltipPosition', 'auto');
			tour.start()
			localStorage.dashboardWalkThrough = '1';
  }
  
}

function specificWalkThrough(element){
  let signInCount = parseInt($('#userSignInCount').val());
  let points = $('#onboarding').val();
  // && localStorage.specificWalkThrough != 2
  if (signInCount <=1 && points == '1'){
      var tour = introJs(element);
			tour.setOption('tooltipPosition', 'auto');
			tour.start();
  }
  
};

function mobileMenu(){
  let menu = $('#mobile-menu'),
      menuStart = $('#menu-start'),
      overlay = $('.menu-overlay'),
      profileToggle = $('.menu_user'),
      menuProfile = $('.menu_profile'),
      body = $('body');
      
  menuStart.click(function(e){
    e.preventDefault();
    menu.addClass('active');
    body.addClass('no-scroll');
    overlay.show();
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
        let name = $('#facebookModal #user_name').val();
        let email = $('#facebookModal #user_email').val();
        let age = $('#facebookModal #user_age').val();
        let gender = $('#facebookModal #user_gender').val();
        let location = $('#facebookModal #user_location').val();
        let birthday = $('#facebookModal #user_birthday').val();
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
  openModal();
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
  mainWalkThrough();
  correctAnswer();
})

// git push git@github.com:isuruv/Fiduty.git  cloud9_2:cloud9_2

// $('#facebookModal').modal('toggle');