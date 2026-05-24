import { create } from "zustand";

interface NewsForm {
  title: string;
  descriptions: string[];
  images: string[];
  eventDate: string;
  nameBlock: string;
  event: string;
  video: string;
}

interface FormNewsState {
  form: NewsForm;

  setField: (field: keyof NewsForm, value: any) => void;

  addDescription: (text: string) => void;
  removeDescription: (index: number) => void;

  addImage: (img: string) => void;
  removeImage: (index: number) => void;

  setVideo: (video: string) => void;

  resetForm: () => void;
}

export const useFormNews = create<FormNewsState>((set) => ({
  form: {
    title: "",
    descriptions: [],
    images: [],
    eventDate: "",
    nameBlock: "",
    event: "",
    video: "",
  },

  setField: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),

  addDescription: (text) =>
    set((state) => ({
      form: {
        ...state.form,
        descriptions: [...state.form.descriptions, text],
      },
    })),

  removeDescription: (index) =>
    set((state) => ({
      form: {
        ...state.form,
        descriptions: state.form.descriptions.filter((_, i) => i !== index),
      },
    })),

  addImage: (img) =>
    set((state) => ({
      form: {
        ...state.form,
        images: [...state.form.images, img],
      },
    })),

  removeImage: (index) =>
    set((state) => ({
      form: {
        ...state.form,
        images: state.form.images.filter((_, i) => i !== index),
      },
    })),

  resetForm: () =>
    set({
      form: {
        title: "",
        descriptions: [],
        images: [],
        eventDate: "",
        nameBlock: "",
        event: "",
        video: "",
      },
    }),
  setVideo: (video: string) =>
    set((state) => ({
      form: { ...state.form, video },
    })),
}));


interface DescrState {
  description: string;
  setDescr: (text: string) => void;
  resetDescr: () => void;
}

export const useNewsDescr = create<DescrState>((set) => ({
  description: "",
  setDescr: (text) => set({ description: text }),
  resetDescr: () => set({ description: "" }),
}));