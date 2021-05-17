import React, { useState, useEffect } from 'react';

import { Typography, Button } from '@material-ui/core';
import { StepWrapper, Tiles, OptionCard, OptionContent, ErrorMessage, Controls } from './SelectEventCategory-style';


interface SelectEventCategoryProps {
	onSelectCategory(category: number): void;
}

const categories = [
  { name: "Info", id: 0 },
  { name: "Meeting", id: 1 },
  { name: "Trade Offer", id: 2 }
]


const SelectEventCategory: React.FC<SelectEventCategoryProps> = ({ onSelectCategory }) => {
	const [currentCategory, setCurrentCategory] = useState(-1);
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage("");
	}, [currentCategory])

	const handleConfirmCategory = () => {
		if (currentCategory !== -1) {
			onSelectCategory(currentCategory);
		} else {
			setMessage("You must select event category to continue!");
		}
	}

	return (
		<StepWrapper>
      <Typography variant="h5">
        Choose event type:
      </Typography>
			<Tiles>
        {categories.map(({ name, id }) => (
          <OptionCard elevation={7} onClick={() => setCurrentCategory(id)}>
            <OptionContent isSelected={currentCategory === id}>
              <Typography variant="h6">
                {name}
              </Typography>
            </OptionContent>
          </OptionCard>
        ))}
			</Tiles>
			<ErrorMessage color="secondary">{message}</ErrorMessage>
      <Controls>
			  <Button variant="contained" color="secondary">cancel</Button>
			  <Button variant="contained" color="primary" onClick={handleConfirmCategory}>next</Button>
      </Controls>
		</StepWrapper>
	)
}

export default SelectEventCategory;