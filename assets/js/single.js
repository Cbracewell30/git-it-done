var issuecontainerEL = document.querySelector("#issues-container");

var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
            fetch(apiUrl)
            .then(function(response){
                // request was successful
                if(response.ok){
                    response.json().then(function(data){
                        // pass response data to dom function
                        displayIssues(data);
                    });
                } else {
                    alert("There was a problem with your request!");
                }
            })
};

var displayIssues = function(issues) {
    if (issues.length === 0){
        issuecontainerEL.textContent = "This repo has no open issues!";
        return;
    }

for (var i = 0; i < issues.length; i++) {
      // create a link element to take users to the issue on github

var issueEl = document.createElement("a");

// creat span to hold issue title
var titleEL = document.createElement("span")
titleEL.textContent = issues[i].title;

// append to container
issueEl.appendChild(titleEL);

var typeEL = document.createElement("span")

if(issues[i].pull_request) {
    typeEL.textContent = "(pull request)";
} else {
    typeEL.textContent = "(Issue)";
}

// apend to container
issueEl.appendChild(typeEL);

titleEL.setAttribute
issueEl.classList = "list-item flex-row justify-space-between align-center";
issueEl.setAttribute("href", issues[i].html_url);
issueEl.setAttribute("target", "_blank");

issuecontainerEL.appendChild(issueEl);

}
};

getRepoIssues("facebook/react");