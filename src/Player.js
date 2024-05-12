import Card from 'react-bootstrap/Card';

/**
 * 
 * @param {string} Name
 * @param {string} Team
 * @param {string} Nationality
 * @param {Number} JerseyNumber
 * @param {Number} Age
 * @param {string} ImageURL
 * @returns 
 */
function Player ({
    Name = "NA",
    Team = "NA",
    Nationality = "NA",
    JerseyNumber = 0,
    Age = 0,
    ImageURL = "https://cilisos.my/wp-content/uploads/2016/07/unknown-person-icon-Image-from.png"
}) {
    return(
        <div className = "col-12 col-lg-4">
            <Card style={{ width: '18rem', backgroundColor: 'black', color: 'white', margin: 'auto', marginTop: '20px', border: '2px solid gold' }}>
                <Card.Img variant="top" src={ImageURL} style={{ width: '17.8rem', height: '17.8rem', backgroundColor: 'rgb(223, 202, 100)' }} alt = "players" />
                <Card.Body>
                    <Card.Title className='fw-bold'>{Name} - {Team}</Card.Title>
                    <Card.Text>Nationality: {Nationality}</Card.Text>
                    <Card.Text>Jersey Number: {JerseyNumber}</Card.Text>
                    <Card.Text>Age: {Age}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}



export default Player;