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
  });

  test('is handling empty list of comments', async () => {
  });

  test('is handling refresh correctly', async () => {
  });
});
