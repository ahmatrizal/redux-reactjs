import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { title: state.users.title }
}

function JumbotronComponent(props) {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>{props.title}</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                </p>
                    <p>
                    <Button variant="outline-dark">Let's Go !</Button>
                    </p>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default connect(mapStateToProps,null) (JumbotronComponent)
