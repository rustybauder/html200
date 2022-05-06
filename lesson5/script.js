let accountBalance = 1000;

function confirmAction() {
        let confirmAction = confirm("* * * * * * * * * * * * * * * * * W A R N I N G * * * * * * * * * * * * * * * * * \n\nThis system may contain private financial information. By using this system, you consent to the monitoring, recording, and reviewing of your activities in this system. You may only access this system using your own personal information. Any other use of this system is an unauthorized use and is prohibited. Unauthorized use violates Federal law and may result in criminal or civil penalties under these laws. Examples are penalties for knowingly or intentionally accessing a computer without authorization or exceeding authorized access under 18 U.S.C. 1030, and penalties for the willful unauthorized access or inspection of financial records under 26 U.S.C. 7213A and 26 U.S.C. 7431.\n\nALL USERS SHALL LOG OFF THE HOMETOWN BANK OWNED NETWORK IMMEDIATELY IF SAID USER DOES NOT AGREE TO THE CONDITIONS STATED ABOVE.");
        if (confirmAction) {
          function menu() {
          	let input = prompt("Enter B To See Your Account Balance\n\nEnter D To Make a Deposit\n\nEnter W To Make a Withdrawl\n\nEnter Q to End Session");
          	switch(input) {
              case "b":
                myBalance();
                menu();
                break;
          		case "d":
          			accountDeposit();
          			menu();
          			break;
              case "w":
            		accountWithdrawal();
            		menu();
                break;
          		case "q":
          			let quit = alert("Thank you for choosing Hometown Bank. We hope to serve you again soon!")
          			break;
          		default:
              	alert("Error: Please Choose an Option from the Menu or close tab to end the Session");
          			menu();
          	}
        }
        return menu();
        }
      }

function myBalance(){
  let balance = alert("Current Account Balance: $" + accountBalance);
      }

function accountDeposit() {
  let deposit = prompt("Deposit Amount");
      	let depositBalance = (accountBalance + Number(deposit));
      	alert("Your New Balance is $" + depositBalance);
      	accountBalance = depositBalance;
      	}

function accountWithdrawal() {
	let withdraw = prompt("Withdrawal Amount");
				let newBalance = accountBalance - withdraw;
				alert("Your New Balance is $" + (newBalance));
				accountBalance = newBalance;
			}
