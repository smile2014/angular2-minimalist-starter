import {
TestComponentBuilder,
describe,
expect,
inject,
it,
AsyncTestCompleter
} from 'angular2/testing_internal';
import {Component, View} from 'angular2/core';

import {HomeCmp} from './home';

export function main() {
  describe('Home component', () => {

    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async: AsyncTestCompleter) => {
        tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
          .createAsync(TestComponent).then((fixture) => {
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h2').textContent).toEqual('Home!');
            async.done();
          });
      }));

  });
}

@Component({ selector: 'test-cmp' })
@View({ directives: [HomeCmp] })
class TestComponent { }
