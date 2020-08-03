import React, { useState } from 'react';
import { TextField, Button, Grid, Divider, Typography, ListItem, ListItemText, List } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, connect } from 'react-redux';

import { createExam, toggleResultsPage } from '../../redux/dataEntry/actions'
import ResultEntry from './ResultEntry'
import './css/menuContainer.css'

const mapStateToProps = (state) => {
	return {
		enterResultsPage: state.dataEntry.enterResultsPage
	}
}

const MenuContainer = ({ enterResultsPage }) => {
	const [examTitle, setExamTitle] = useState('')
	const dispatch = useDispatch()

	if (enterResultsPage) return <ResultEntry />
	else
		return (
			<div>
				<Grid container>
					<Grid xs={11}>
						<TextField
							fullWidth
							placeholder='Create New Exam'
							value={examTitle}
							onChange={(e) => setExamTitle(e.target.value)}
						/>
					</Grid>
					<Grid xs={1}>
						<Button
							color="primary"
							onClick={() => {
								dispatch(createExam(examTitle));
								dispatch(toggleResultsPage(true))
							}}
						>
							{'Create'}
						</Button>
					</Grid>
				</Grid>

				<Divider center style={{ margin: '2em 0' }} />

				<div style={{ display: 'flex' }}>
					<Typography style={{ flexGrow: 1 }} variant="h5">{"Drafts"}</Typography>
					<span style={{ marginRight: '3em' }}><DraftsIcon /></span>
				</div>

				<List component="nav" >
					<ListItem button className="list-item">
						<ListItemText fullWidth>{'Final Exam'}</ListItemText>
					</ListItem>
				</List>

				<Divider center style={{ margin: '2em 0' }} />

				<div style={{ display: 'flex' }}>
					<Typography style={{ flexGrow: 1 }} variant="h5">{"Outbox"}</Typography>
					<span style={{ marginRight: '3em', transform: 'rotate(270deg)' }}><ExitToAppIcon /></span>
				</div>

				<List component="nav" >
					<ListItem button>
						<ListItemText fullWidth>{'Quarterly Exam'}</ListItemText>
					</ListItem>
					<ListItem button>
						<ListItemText fullWidth>{'Half-Yearly Exam'}</ListItemText>
					</ListItem>
				</List>
			</div>
		);
}

export default connect(mapStateToProps)(MenuContainer);