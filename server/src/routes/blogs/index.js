import { Router } from 'express';
import Table from '../../table';

let router = Router();
const blogs = new Table( 'blogs' );

router.get( '/', ( req, res ) => {
    blogs.getAll()
        .then( results => res.send( results ) )
} );

router.post( '/', ( req, res ) => {
    const { body } = req;

    blogs.insert( body ).then( result => res.send( result ) )
} );

router.get( '/:id', ( req, res ) => {
    const { id } = req.params;

    blogs.getOne( id )
        .then( result => res.send( result ) );
} );

export default router;
