# Purpose 
- To learn Angular 
- Make an online clue card for Clue Master Detective Board Game.
- Learn Material Angular

# Basic Features 

- Be able to mark Locations, Suspects, and Weapons as 
  - Unmarked (Not seen)
  - Possible (Meaning seen but not enough to be ruled out)
  - Rule out (Meaning not it)
- Have a view that shows all the possible weapons locations and suspects
  - Doesn't show Ruled out items
  - Shows unmarked as one color 
  - Shows possible as a different color
- Allow users to clear all their data

## Non Functional Features 

- Don't lose the player data on page refresh, tab close or navigating away
- Have responsive design ( Angular Material should be able to handle this)


# Storing Data 

- Using local storage to save the users current state will need to make a service that abstracts this away
- Storing the information as json with the following shape 
  ```ts
    interface DeductionItem{
        Name: string,
        Status: DeductionStatus     
    }
    
    enum DeductionStatus {
        Unmarked,
        Possible,
        RuledOut,
    }
  ```

  ```JSON
    {
        "Suspects": {
            List<DeductionItemObjects>
        },
        "Weapons": {
            List<DeductionItemObjects>
        },
        "Locations": {
            List<DeductionItemObjects>
        },
    }

  ```

# Deploy 

### Setup 
- Follow [this](https://www.linkedin.com/pulse/deploy-angular-app-github-pages-cli-dilakshan-antony-thevathas-octlc/)

TL;DR:
- Run This `ng deploy --base-href=https://garv5014.github.io/Get-A-Clue/`