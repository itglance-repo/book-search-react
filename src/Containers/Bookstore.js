import React, { Component, Fragment } from 'react';

export default class Bookstore extends Component {
	state = {
		books: [
			{
				name: 'Saalko paat',
				description: 'Saalko paata tapari hune ye maya',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shirish_ko_Phool.jpg/220px-Shirish_ko_Phool.jpg'
			},
			{
				name: 'Paan ko paat',
				description: 'Saalko paata tapari hune ye maya',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shirish_ko_Phool.jpg/220px-Shirish_ko_Phool.jpg'
			},
			{
				name: 'Sisau ko paat',
				description: 'Saalko paata tapari hune ye maya',
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shirish_ko_Phool.jpg/220px-Shirish_ko_Phool.jpg'
			}
		],
		showBookForm: false,
		data: { name: '', image: '', description: '' }
	};
	showBookForm = () => {
		this.setState({
			showBookForm: !this.state.showBookForm
		});
	};
	handleChange = (e) => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value
			}
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			books: [ ...this.state.books, this.state.data ],
			data: {
				name: '',
				image: '',
				description: ''
			}
		});
	};
	render() {
		return (
			<div className="container">
				<div className="add-form">
					<input type="text" placeholder="search book" />
				</div>

				<div className="book-list-container">
					{this.state.books.map((book) => (
						<div className="book-list">
							{book.name}
							<img src={book.image} alt={book.name} />
						</div>
					))}
				</div>

				<div className="add-form">
					<button onClick={this.showBookForm} className="btn">
						Add book
					</button>
					{this.state.showBookForm && (
						<AddBookForm
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							data={this.state.data}
						/>
					)}
				</div>
			</div>
		);
	}
}

const AddBookForm = ({ handleChange, handleSubmit, data }) => (
	<Fragment>
		<form onSubmit={handleSubmit} className="addBookForm">
			<input type="text" onChange={handleChange} name="name" placeholder="Book name" value={data.name} />
			<input type="text" onChange={handleChange} name="image" placeholder="Book Image Url" value={data.image} />
			<input
				type="text"
				onChange={handleChange}
				name="description"
				placeholder="Book description"
				value={data.description}
			/>
			<button type="submit"> Add Book</button>
		</form>
	</Fragment>
);
