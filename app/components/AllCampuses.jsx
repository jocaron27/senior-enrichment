import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AllCampuses(props) {
    const { campuses } = props;
    return (
        <div>
            <div className="title">
                <h2>All Campuses</h2>
            </div>
            <div className="campus-list">
                <ul>
                {campuses.map(campus => <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        campuses: state.allCampuses
    }
}

const CampusList = connect(mapStateToProps)(AllCampuses);

export default CampusList;