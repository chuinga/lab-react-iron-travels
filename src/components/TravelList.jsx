import React, { useState } from "react";
import travelPlansData from "/src/assets/travel-plans.json";
import "/src/styles/TravelList.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  return (
    <div>
      <ul>
        {travelPlans.map((onePlan) => (
          <li key={onePlan.id} className="travel-onePlan-item">
            <img src={onePlan.image} alt={onePlan.destination} />
            <div className="textPart">
              <h3>
                {onePlan.destination} {`(${onePlan.days} Days)`}
              </h3>
              <p>{onePlan.description}</p>
              <p>
                <span className="bold-text">Price:</span> ${onePlan.totalCost}
              </p>
              {renderLabels(onePlan)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function renderLabels(onePlan) {
  const labels = [];

  if (onePlan.totalCost <= 350) {
    labels.push(
      <span key="great-deal" className="label great-deal">
        Great Deal
      </span>
    );
  }

  if (onePlan.totalCost >= 1500) {
    labels.push(
      <div key="premium-all-inclusive" className="label-container">
        <span className="label premium">Premium</span>
        {onePlan.allInclusive && (
          <span className="label all-inclusive">All Inclusive</span>
        )}
      </div>
    );
  }

  return labels;
}

export default TravelList;