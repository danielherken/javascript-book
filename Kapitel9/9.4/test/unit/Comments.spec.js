import { mount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import Comments from '~/components/Comments.vue';

let localVue;

beforeEach(() => {
  localVue = createLocalVue();
  localVue.use(BootstrapVue);
});

describe('Comments', () => {
  test('is showing comments', async () => {
    const wrapper = mount(Comments, {
      mocks: {
        $t: (key) => key,
        $axios: {
          $get: () => {
            return [
              {
                name: 'Testname',
                body: 'Testkommentar',
              },
              {
                name: 'Testname',
                body: 'Testkommentar',
              },
            ];
          },
        },
      },
      propsData: {
        postId: 1,
      },
      localVue,
    });

    await wrapper.vm.$nextTick();

    // Tested of die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    const comments = wrapper.findAll('li');
    expect(comments.length).toBe(2);

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is handling empty list of comments', async () => {
    const wrapper = mount(Comments, {
      mocks: {
        $t: (key) => key,
        $axios: {
          $get: () => {
            return [];
          },
        },
      },
      propsData: {
        postId: 1,
      },
      localVue,
    });

    await wrapper.vm.$nextTick();

    // Tested of die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    // Tested ob wirklich kein Kommentar angezeigt wird
    const comments = wrapper.findAll('li');
    expect(comments.length).toBe(0);

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is handling refresh correctly', async () => {
    const result = [];

    const wrapper = mount(Comments, {
      mocks: {
        $t: (key) => key,
        $axios: {
          $get: () => {
            result.push({
              name: 'Testname',
              body: 'Testbody',
            });

            return result;
          },
        },
      },
      propsData: {
        postId: 1,
      },
      localVue,
    });

    await wrapper.vm.$nextTick();

    // Tested ob die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    // Tested ob ein Kommentar angezeigt wird
    let comments = wrapper.findAll('li');
    expect(comments.length).toBe(1);

    // Durch einen Klick auf den Button einen Refresh auslösen
    const button = wrapper.find('button');
    button.trigger('click');

    // Verarbeiten aller Events abwarten
    await wrapper.vm.$nextTick();

    // Tested ob nun zwei Kommentare angezeigt werden
    comments = wrapper.findAll('li');
    expect(comments.length).toBe(2);

    expect(wrapper.element).toMatchSnapshot();
  });
});
