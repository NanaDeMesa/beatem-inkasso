import React from "react";
import styled from "styled-components";

const StyledRandomTips = styled.header`
  color: white;
  display: grid;
  font-size: 18px;
  padding: 15px;
`;

function Header() {
  function getRandomTip() {
    const tips = [
      "The statues of limitation must be objected by the debtor to the creditor.",
      "Save proof of payments at least for three years.",
      "After each agreement by telephone, ask for a written confirmation.",
      "Before you go to a law firm , check if you can go to the public legal information.",
      "If you’re not sure, if the debt is legit ask for a signed contract or a proof.",
      "Black sensitive data, when you send proofs to the creditor or collection agency.",
      "Offer a fair comparison/instalment. It is worth a try!",
      "Clerks are only human. Stay polite!",
      "Write down your debts to get an overview.",
      "Check & follow deadlines from court and debt collection agencies."
    ];

    const tip = tips[Math.floor(Math.random() * tips.length)];
    return tip;
  }

  return (
    <>
      <StyledRandomTips>
        Tip:
        <br />
        {getRandomTip()}
      </StyledRandomTips>
    </>
  );
}

export default Header;
