document.addEventListener("DOMContentLoaded" , function(){
    const searchButton = document.getElementById("search-btn")
    const userNameInput = document.getElementById("user-input")
    const statsContainer = document.querySelector(".stats-container")
    const easyProgressCicle = document.querySelector(".easy-progress")
    const mediumProgressCicle = document.querySelector(".medium-progress")
    const hardProgressCicle = document.querySelector(".hard-progress")
    const easyLabel = document.getElementById("easy-label")
    const mediumLabel = document.getElementById("medium-label")
    const hardLabel = document.getElementById("hard-label")
    const cardStatsContainer = document.querySelector(".stats-card")
    const extraDetails = document.querySelector(".extra-details")


  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Username should not be empty");
      return false;
    }

    const regex = /^[a-zA-Z0-9_]{1,15}$/;
    const isMatching = regex.test(username);

    if (!isMatching) {
      alert("Invalid Username Buddy");
    }

    return isMatching;
  }

  async function fetchUserDetails(username) {
    try {
      searchButton.textContent = "Searching....";
      searchButton.disabled = true;

      const targetUrl = `https://leetcode.com/graphql`;
      const proxyUrl = `http://cors-anywhere.herokuapp.com/`

      const query = `
        query userSessionProgress($username: String!) {
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            username
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: query,
          variables: { username }
        })
      };

      const response = await fetch(proxyUrl + targetUrl, requestOptions);

      if (!response.ok) {
        throw new Error("Unable to fetch the User details");
      }

      const parsedData = await response.json();
      console.log("Logging Data:", parsedData);
      displayUserData(parsedData);

    //   statsContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
      console.log(error);
      statsContainer.innerHTML = "No Data Found";
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

  function updateProgress(solved , total , label , circle){
    const progressDegree = (solved/total)*100;
    circle.style.setProperty("--progress-degree" , `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
  }

  function displayUserData(parsedData){
    const totalQues = parsedData.data.allQuestionsCount[0].count;
    const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
    const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
    const totalHardQues = parsedData.data.allQuestionsCount[3].count;

    const totalSolvedTotalQues =
    parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const totalSolvedTotalEasyQues = 
    parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const totalSolvedTotalMediumQues = 
    parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const totalSolvedTotalHardQues = 
    parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

    updateProgress(totalSolvedTotalEasyQues , totalEasyQues , easyLabel , easyProgressCicle)
    updateProgress(totalSolvedTotalMediumQues , totalMediumQues , mediumLabel , mediumProgressCicle)
    updateProgress(totalSolvedTotalHardQues , totalMediumQues , hardLabel , mediumProgressCicle)

    const cardData = [
    {label: "Overall Submission" , 
    value: parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count},
    {label: "Overall EasySubmission" , 
    value: parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count},
    {label: "Overall MediumSubmission" ,
     value: parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count},
    {label: "Overall HardSubmission" , 
    value: parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count },
  ];

  console.log("Card ka Data: " , cardData);
  

  cardStatsContainer.innerHTML = cardData.map(
    data => 
         `
        <div class = "card">
        <h4>${data.label}</h4>
        <p>${data.value}</p>
        </div>
        `
  ).join("")

  const matchedUser = [
    {
        label: "Username" , value: parsedData.data.matchedUser.username.value},
        {label: "SubmitStats" , value: parsedData.data.matchedUser.submitStats

    }
  ];

  console.log("User match hai: ",matchedUser);
  
//   extraDetails.innerHTML = matchedUser.map(
//     data => 
//         `
//         <div class = extra-det>
//         <p>${data.matchedUser}</p>
//         </div>
//         `
//   ).join("")


  }
  

  searchButton.addEventListener("click", function () {
    const username = userNameInput.value;
    console.log("Login UserName:", username);

    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });
});