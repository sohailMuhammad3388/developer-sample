using System;
using System.Collections.Generic;

namespace DeveloperSample.Container
{
    public class Container
    {
        private Dictionary<Type, Type> bindings = new Dictionary<Type, Type>();

        public void Bind(Type interfaceType, Type implementationType)
        {
            if (!interfaceType.IsInterface || !interfaceType.IsAssignableFrom(implementationType))
            {
                throw new ArgumentException("Invalid Bindings Type.");
            }
            bindings[interfaceType] = implementationType;
        }
        public T Get<T>()
        {
            Type typeRequested= typeof(T);
            if (!bindings.TryGetValue(typeRequested, out Type implementationType))
            {
                throw new InvalidOperationException($"nO BINDINGD FOUND FOR {typeRequested}");
            }
            return (T)Activator.CreateInstance(implementationType);
        }

    }
}
