import { mount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import Pagination from '~/components/Pagination.vue';

let localVue;

beforeEach(() => {
  localVue = createLocalVue();
  localVue.use(BootstrapVue);
});

describe('Pagination', () => {
  test('is handling first page correctly', () => {
    const wrapper = mount(Pagination, {
      mocks: {
        $t: (key) => key,
      },
      propsData: {
        page: 0,
        itemsCount: 30,
        itemsPerPage: 10,
      },
      localVue,
    });

    // Tested of die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    // Prüft ob die Komponente zwei Buttons enthält
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(2);

    // Prüft ob der erste Button deaktiviert ist
    expect(buttons.at(0).element.disabled).toBe(true);

    // Prüft ob der zweite Button aktiviert ist
    expect(buttons.at(1).element.disabled).toBe(false);

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is handling middle page correctly', () => {
    const wrapper = mount(Pagination, {
      mocks: {
        $t: (key) => key,
      },
      propsData: {
        page: 1,
        itemsCount: 30,
        itemsPerPage: 10,
      },
      localVue,
    });

    // Tested of die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    // Prüft ob die Komponente zwei Buttons enthält
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(2);

    // Prüft ob der erste Button aktiviert ist
    expect(buttons.at(0).element.disabled).toBe(false);

    // Prüft ob der zweite Button aktiviert ist
    expect(buttons.at(1).element.disabled).toBe(false);

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is handling last page correctly', () => {
    const wrapper = mount(Pagination, {
      mocks: {
        $t: (key) => key,
      },
      propsData: {
        page: 2,
        itemsCount: 30,
        itemsPerPage: 10,
      },
      localVue,
    });

    // Tested of die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    // Prüft ob die Komponente zwei Buttons enthält
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(2);

    // Prüft ob der erste Button aktiviert ist
    expect(buttons.at(0).element.disabled).toBe(false);

    // Prüft ob der zweite Button deaktiviert ist
    expect(buttons.at(1).element.disabled).toBe(true);

    expect(wrapper.element).toMatchSnapshot();
  });

  test('is emitting page changed event', async () => {
    const wrapper = mount(Pagination, {
      mocks: {
        $t: (key) => key,
      },
      propsData: {
        page: 1,
        itemsCount: 30,
        itemsPerPage: 10,
      },
      localVue,
    });

    // Tested of die Komponente erstellt werden konnte
    expect(wrapper.vm).toBeTruthy();

    // Prüft ob die Komponente zwei Buttons enthält
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(2);

    // Klicke auf beide Buttons
    buttons.at(0).trigger('click');
    buttons.at(1).trigger('click');
    await wrapper.vm.$nextTick();

    // Jeder Button muss einmal das Page Changed event auslösen
    expect(wrapper.emitted().pageChanged.length).toBe(2);

    expect(wrapper.element).toMatchSnapshot();
  });
});
