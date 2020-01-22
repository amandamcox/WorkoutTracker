import React, { useState } from 'react'

const EditableInput = ({ text, children, childSave, ...props }) => {
	const [isEditing, setEditing] = useState(false)

	const onEdit = el => {
		childSave(el.id, el.name)
		setEditing(false)
	}

	return (
		<section {...props}>
			{isEditing ? (
				<div>
					{children}
					<div className='edit-buttons'>
						<span className='ui clickable-icon' onClick={() => onEdit(children.props)}>
							<i className='save icon blue' />
						</span>
						<span className='ui clickable-icon' onClick={() => setEditing(false)}>
							<i className='close icon red' />
						</span>
					</div>
				</div>
			) : (
				<div className='clickable-icon' onClick={() => setEditing(true)}>
					<span className='ui label'>
						<i className='icon edit'></i>
						{text}
					</span>
				</div>
			)}
		</section>
	)
}

export default EditableInput
