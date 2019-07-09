import { routes } from '../app/app-routing.module';
import { UsersComponent } from './users/users.component';

describe('shuold contain a route for user ', () => {
    it('should  containa route for users', () => {
        expect(routes).toContain({

            path: 'users', component: UsersComponent
        })


    })

})